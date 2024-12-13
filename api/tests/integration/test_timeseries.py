"""Integration tests."""

import re
from fastapi import status
from fastapi.testclient import TestClient
from responses import RequestsMock

from api.tests.conftest import Measurement
from src.schemas import MeteoStation


def test_get_timeseries(
    client: TestClient,
    mocked_responses: RequestsMock,
    measurements_data: Measurement,
) -> None:
    """Test the get_timeseries endpoint."""
    mocked_responses.get(
        measurements_data.URL_AEMET_API,
        json={
            "descripcion": "exito",
            "estado": 200,
            "datos": measurements_data.URL_JSON_FILE,
            "metadatos": "https://opendata.aemet.es/opendata/sh/2cc612ba",
        },
        status=status.HTTP_200_OK,
    )
    mocked_responses.get(
        measurements_data.URL_JSON_FILE,
        json=measurements_data.measurements,
        status=status.HTTP_200_OK,
    )
    request_data_types = ["temperature", "speed"]
    response = client.get(
        "/timeseries",
        params={
            "datetime_start": measurements_data.DATETIME_START,
            "datetime_end": measurements_data.DATETIME_END,
            "meteo_station": MeteoStation.JUAN_CARLOS_I.value,
            "time_aggregation": "Hourly",
            "data_types": request_data_types,
        },
    )

    assert response.status_code == status.HTTP_200_OK
    response_data = response.json()["data"]

    assert len(response_data) == measurements_data.AGGREGATED_HOURS_AMOUNT
    response_cols = response_data[0].keys()
    assert all(c in ["Datetime", "Temperature (ºC)", "Speed (m/s)", "Station"] for c in response_cols)
    assert response_data[0] == {
        "Datetime": "2021-01-25 01:00:00+0100",
        "Temperature (ºC)": 0.8166666666666668,
        "Station": "GdC Estacion meteorologica",
        "Speed (m/s)": 8.4,
    }
    assert response_data[0]["Datetime"].endswith("+0100")


def test_get_timeseries_dst(
    client: TestClient,
    mocked_responses: RequestsMock,
    measurements_data: Measurement,
    raw_measurements_dst: list[dict],
) -> None:
    """Test the get_timeseries endpoint."""
    mocked_responses.get(
        measurements_data.URL_AEMET_API_DST,
        json={
            "descripcion": "exito",
            "estado": 200,
            "datos": measurements_data.URL_JSON_FILE,
            "metadatos": "https://opendata.aemet.es/opendata/sh/2cc612ba",
        },
        status=status.HTTP_200_OK,
    )
    mocked_responses.get(
        measurements_data.URL_JSON_FILE,
        json=raw_measurements_dst,
        status=status.HTTP_200_OK,
    )
    request_data_types = ["temperature", "speed"]
    response = client.get(
        "/timeseries",
        params={
            "datetime_start": measurements_data.DATETIME_START_DST,
            "datetime_end": measurements_data.DATETIME_END_DST,
            "meteo_station": MeteoStation.JUAN_CARLOS_I.value,
            "time_aggregation": "Hourly",
            "data_types": request_data_types,
        },
    )

    assert response.status_code == status.HTTP_200_OK
    response_data = response.json()["data"]

    assert len(response_data) == measurements_data.AGGREGATED_DAYS_AMOUNT_DST
    response_cols = response_data[0].keys()
    assert all(c in ["Datetime", "Temperature (ºC)", "Speed (m/s)", "Station"] for c in response_cols)
    assert response_data[0] == {
        "Datetime": "2021-07-25 02:00:00+0200",
        "Temperature (ºC)": -8.6,
        "Station": "GdC Estacion meteorologica",
        "Speed (m/s)": 3.1,
    }
    assert response_data[0]["Datetime"].endswith("+0200")


def test_get_timeseries_no_data_types(
    client: TestClient,
    mocked_responses: RequestsMock,
    measurements_data: Measurement,
) -> None:
    """Test the get_timeseries endpoint without specifying data types."""
    mocked_responses.get(
        re.compile(r".*opendata\.aemet\.es/opendata/api/antartida/datos/.*"),
        json={
            "descripcion": "exito",
            "estado": 200,
            "datos": "https://opendata.aemet.es/opendata/sh/3868ec24_202412122150_json",
            "metadatos": "https://opendata.aemet.es/opendata/sh/2cc612ba",
        },
    )
    mocked_responses.get(
        re.compile(r"https://opendata\.aemet\.es/opendata/sh/.*"),
        json=measurements_data.measurements,
        status=status.HTTP_200_OK,
    )
    response = client.get(
        "/timeseries",
        params={
            "datetime_start": measurements_data.DATETIME_START,
            "datetime_end": measurements_data.DATETIME_END,
            "meteo_station": MeteoStation.JUAN_CARLOS_I.value,
            "time_aggregation": "Daily",
        },
    )
    assert response.status_code == status.HTTP_200_OK
    data: list[dict] = response.json()["data"]
    assert len(data) == measurements_data.AGGREGATED_DAYS_AMOUNT
    expected_columns = ["Station", "Temperature (ºC)", "Pressure (hpa)", "Speed (m/s)"]
    assert all(column in data[0] for column in expected_columns)
