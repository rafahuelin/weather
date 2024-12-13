"""Pytest configuration."""

from dataclasses import dataclass, field
from typing import Any
from collections.abc import Generator

import pytest
import responses
from fastapi.testclient import TestClient

from src.main import app
from api.tests.fixtures import raw_data


@pytest.fixture()
def client() -> Generator[TestClient, Any, None]:
    """Create a FastAPI TestClient fixture."""
    with TestClient(app) as client:
        yield client


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
    URL_JSON_FILE: str = "https://opendata.aemet.es/opendata/sh/3868ec24_202412122150_json"
    URL_AEMET_API: str = "https://opendata.aemet.es/opendata/api/antartida/datos/fechaini/2021-01-25T00:00:00UTC/fechafin/2021-02-10T00:00:00UTC/estacion/89064"
    NON_AGGREGATED_AMOUNT: int = 2305
    AGGREGATED_HOURS_AMOUNT: int = 385
    AGGREGATED_DAYS_AMOUNT: int = 17
    AGGREGATED_MONTHS_AMOUNT: int = 2


@pytest.fixture()
def measurements_data() -> Measurement:
    """Measurements from downloaded json."""
    return Measurement()
