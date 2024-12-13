"""Tests api_requests.py module."""

from responses import RequestsMock
from starlette import status

from api.tests.conftest import Measurement
from src.schemas import MeteoStation
from src.controller.api_requests import antartida_api_request, download_timeseries
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from src.schemas import AEMETResponse


def test_antartida_api_request(mocked_responses: RequestsMock, measurements_data: Measurement) -> None:
    """Test the antartida_api_request function."""
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
    data: AEMETResponse = antartida_api_request(
        measurements_data.DATETIME_START_DST,
        measurements_data.DATETIME_END_DST,
        MeteoStation.JUAN_CARLOS_I,
    )

    assert data.__dict__ == {
        "descripcion": "exito",
        "estado": 200,
        "datos": measurements_data.URL_JSON_FILE,
        "metadatos": "https://opendata.aemet.es/opendata/sh/2cc612ba",
    }


def test_download_timeseries() -> None:
    """Test the download_timeseries function."""
    download_timeseries(
        "https://opendata.aemet.es/opendata/sh/5847f34c_202412131731_json",
    )
