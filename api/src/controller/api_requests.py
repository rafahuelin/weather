"""Requests to the AEMET API."""

import requests
from fastapi import HTTPException
from requests import Response
from starlette import status

from src.config import settings
from src.schemas import AEMETResponse, MeteoStation


def antartida_api_request(datetime_start: str, datetime_end: str, meteo_station: MeteoStation) -> AEMETResponse:
    """Request to the AEMET API."""
    base_url: str = "https://opendata.aemet.es/opendata/api/antartida/datos/"
    url: str = f"{base_url}fechaini/{datetime_start}/fechafin/{datetime_end}/estacion/{meteo_station.value}"
    headers = {"api_key": settings.API_KEY, "accept": "application/json"}
    response: Response = requests.get(url, headers=headers)

    if response.status_code != status.HTTP_200_OK:
        raise HTTPException(status_code=response.status_code, detail="Error fetching data from AEMET API")

    return AEMETResponse(**response.json())


def download_timeseries(url: str) -> list[dict]:
    """Download timeseries data."""
    response: Response = requests.get(url, headers={"accept": "application/json"})

    if response.status_code != status.HTTP_200_OK:
        raise HTTPException(status_code=response.status_code, detail="Error fetching timeseries data")

    return response.json()
