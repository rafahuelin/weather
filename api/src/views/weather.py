"""Weather-related API routes."""

from datetime import datetime
from logging import getLogger
from typing import Annotated, TYPE_CHECKING

from sqlmodel import Session


if TYPE_CHECKING:
    import pandas as pd
    from src.db.models import WeatherData

from fastapi import APIRouter, Depends, Query, HTTPException, status
from requests import HTTPError

from src.controller.aggregation import aggregate_timeseries, parse_weather_data
from src.controller.api_requests import antartida_api_request, download_timeseries, observation_api_request
from src.controller.db_update import needs_api_fetch
from src.db import crud, database
from src.schemas import AEMETResponse, DataType, MeteoStation, TimeAggregation
from src.setup.config import settings


logger = getLogger(__name__)

router = APIRouter(prefix="/weather", tags=["Weather"])


@router.get("/")
def get_weather_timeseries(  # noqa: PLR0913
    station_id: str,
    start_datetime: datetime,
    end_datetime: datetime,
    db: Annotated[Session, Depends(database.get_db)],
    data_types: Annotated[
        list[DataType] | None,
        Query(description="Data types: temperature, pressure, speed. If not provided, all types are returned."),
    ] = None,
    time_aggregation: Annotated[
        TimeAggregation | None,
        Query(description="Aggregation that the user requires or None."),
    ] = None,
) -> dict:
    """Retrieve weather timeseries data for a given station and time range."""
    try:
        if needs_api_fetch(db, end_datetime):
            logger.info(f"Fetching data from AEMET API. {end_datetime=}")
            data: AEMETResponse = observation_api_request()
            downloaded_timeseries: list[dict] = download_timeseries(data.datos)
            results: list[WeatherData] = parse_weather_data(downloaded_timeseries)
            crud.store_weather_data(db, results)

        results: list[WeatherData] = crud.get_station_timeseries(db, station_id, start_datetime, end_datetime)
        df_aggregated: pd.DataFrame = aggregate_timeseries(results, time_aggregation, data_types)
        return {"data": df_aggregated.to_dict(orient="records")}
    except HTTPError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Service unavailable, {exc=}",
        ) from exc


@router.get("/antartida")
def get_antartida_timeseries(
    meteo_station: Annotated[MeteoStation, Query(..., description="Meteo station to retrieve data from.")],
    datetime_start: Annotated[str, Query(pattern=settings.DATETIME_PATTERN)],
    datetime_end: Annotated[str, Query(pattern=settings.DATETIME_PATTERN)],
    time_aggregation: Annotated[
        TimeAggregation | None,
        Query(description="Aggregation that the user requires or None."),
    ] = None,
    data_types: Annotated[
        list[DataType] | None,
        Query(description="Data types: temperature, pressure, speed. If not provided, all types are returned."),
    ] = None,
) -> dict:
    """Return timeseries from antartida stations."""
    try:
        data: AEMETResponse = antartida_api_request(datetime_start, datetime_end, meteo_station)
        logger.info(f"Downloading timeseries for {meteo_station=}, {datetime_start=}, {datetime_end=}")
        downloaded_timeseries: list[dict] = download_timeseries(data.datos)
        df_aggregated: pd.DataFrame = aggregate_timeseries(downloaded_timeseries, time_aggregation, data_types)
        return {"data": df_aggregated.to_dict(orient="records")}
    except HTTPError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Service unavailable, {exc=}",
        ) from exc
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Invalid datetime format. Expected 'YYYY-MM-DDTHH:MM:SSUTC'. Error: {exc}",
        ) from exc
