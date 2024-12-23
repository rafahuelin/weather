"""Pytest configuration."""

import json
from collections.abc import Generator
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import pytest
import responses
from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel

from src.controller.aggregation import parse_weather_data
from src.db.database import engine, get_db
from src.db.models import WeatherData
from src.main import app
from tests.fixtures import raw_data, raw_data_dst


@pytest.fixture()
def db_session() -> Generator[Session, None, None]:
    """Create a new database session for a test."""
    # Drop and create all tables before each test for a clean state
    SQLModel.metadata.drop_all(bind=engine)
    SQLModel.metadata.create_all(bind=engine)
    with Session(engine) as session:
        yield session
    SQLModel.metadata.drop_all(bind=engine)


@pytest.fixture()
def client(db_session: Session) -> Generator[TestClient, None, None]:
    """Create a new FastAPI test client with a database session."""

    def override_get_db() -> Generator[Session, None, None]:
        """Override the get_db dependency to use the test database session."""
        yield db_session

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


@pytest.fixture
def mocked_responses() -> Generator[responses.RequestsMock, Any, None]:
    """Mock responses fixture."""
    with responses.RequestsMock() as rsps:
        yield rsps


@dataclass
class Measurement:
    """Contains measurements details from json generated in AEMET endpoin."""

    measurements: list[dict] = field(default_factory=lambda: raw_data.measurements)
    DATETIME_START: str = "2021-01-25T00:00:00UTC"
    DATETIME_END: str = "2021-02-10T00:00:00UTC"
    DATETIME_START_DST: str = "2021-07-25T00:00:00UTC"
    DATETIME_END_DST: str = "2021-08-10T00:00:00UTC"
    URL_JSON_FILE: str = "https://opendata.aemet.es/opendata/sh/3868ec24_202412122150_json"
    URL_AEMET_API: str = "https://opendata.aemet.es/opendata/api/antartida/datos/fechaini/2021-01-25T00:00:00UTC/fechafin/2021-02-10T00:00:00UTC/estacion/89064"
    URL_AEMET_API_DST: str = "https://opendata.aemet.es/opendata/api/antartida/datos/fechaini/2021-07-25T00:00:00UTC/fechafin/2021-08-10T00:00:00UTC/estacion/89064"
    NON_AGGREGATED_AMOUNT: int = 2305
    ANTARTIDA_AGGREGATED_HOURS_AMOUNT: int = 385
    AGGREGATED_HOURS_AMOUNT: int = 4
    ANTARTIDA_AGGREGATED_DAYS_AMOUNT_DST: int = 408
    ANTARTIDA_AGGREGATED_DAYS_AMOUNT: int = 17
    ANTARTIDA_AGGREGATED_MONTHS_AMOUNT: int = 2


@pytest.fixture()
def measurements_data() -> Measurement:
    """Measurements from downloaded json."""
    return Measurement()


@pytest.fixture()
def raw_measurements_dst() -> list[dict]:
    """Raw data from AEMET API in DST Daylight Saving Time."""
    return raw_data_dst.measurements


@pytest.fixture()
def observacion_convencional_data() -> list[dict]:
    """Load and return observacion convencional data from a JSON file."""
    with Path("./api/tests/fixtures/observacion_convencional_file.json").open() as file:
        return json.load(file)


@pytest.fixture()
def observacion_convencional_one_station_data(observacion_convencional_data: list[dict]) -> list[WeatherData]:
    """Load and return data from station 0016A (REUS/AEROPUERTO)."""
    items = [item for item in observacion_convencional_data if item["idema"] == "0016A"]
    return parse_weather_data(items)
