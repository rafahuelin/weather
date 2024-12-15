"""Requests to the AEMET API."""

import requests
from fastapi import HTTPException
from requests import Response
from starlette import status

from src.schemas import AEMETResponse, MeteoStation
from src.setup.config import settings


BASE_URL = "https://opendata.aemet.es/opendata/api"


def _build_api_key_headers() -> dict[str, str]:
    return {"api_key": settings.API_KEY, "accept": "application/json"}


def observation_api_request() -> AEMETResponse:
    """Request to the AEMET API."""
    url: str = f"{BASE_URL}/observacion/convencional/todas"
    response: Response = requests.get(url, headers=_build_api_key_headers())

    if response.status_code != status.HTTP_200_OK:
        raise HTTPException(status_code=response.status_code, detail="Error fetching data from AEMET API")

    return AEMETResponse(**response.json())


def antartida_api_request(datetime_start: str, datetime_end: str, meteo_station: MeteoStation) -> AEMETResponse:
    """Request to the AEMET API."""
    base_url: str = f"{BASE_URL}/antartida/datos/"
    url: str = f"{base_url}fechaini/{datetime_start}/fechafin/{datetime_end}/estacion/{meteo_station.value}"
    response: Response = requests.get(url, headers=_build_api_key_headers())

    if response.status_code != status.HTTP_200_OK:
        raise HTTPException(status_code=response.status_code, detail="Error fetching data from AEMET API")

    return AEMETResponse(**response.json())


def download_timeseries(url: str) -> list[dict]:
    """Download timeseries data."""
    response: Response = requests.get(url, headers={"accept": "application/json"})

    if response.status_code != status.HTTP_200_OK:
        raise HTTPException(status_code=response.status_code, detail="Error fetching timeseries data")

    return response.json()
