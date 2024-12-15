"""Weather API tests."""

from fastapi import status
from fastapi.testclient import TestClient
from responses import RequestsMock

from api.tests.conftest import Measurement


WEATHER_ENDPOINT: str = "/weather"


def test_get_timeseries(
    client: TestClient,
    mocked_responses: RequestsMock,
    measurements_data: Measurement,
    observacion_convencional_data: list[dict],
) -> None:
    """Test the get_timeseries endpoint."""
    mocked_responses.get(
        "https://opendata.aemet.es/opendata/api/observacion/convencional/todas",
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
        json=observacion_convencional_data,
        status=status.HTTP_200_OK,
    )
    request_data_types = ["temperature", "speed"]
    response = client.get(
        WEATHER_ENDPOINT,
        params={
            "station_id": "0009X",
            "start_datetime": "2024-12-13T10:00:00+0000",
            "end_datetime": "2024-12-13T23:00:00+0000",
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
        "Datetime": "2024-12-13 21:00:00+0100",
        "Temperature (ºC)": 7.3,
        "Speed (m/s)": 1.7,
        "Station": "0009X",
    }
    assert response_data[0]["Datetime"].endswith("+0100")
