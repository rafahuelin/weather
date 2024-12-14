"""Weather-related API routes."""

from typing import Annotated, TYPE_CHECKING


if TYPE_CHECKING:
    import pandas as pd
from fastapi import APIRouter, Query, HTTPException, status
from requests import HTTPError

from src.config import settings
from src.controller.aggregation import aggregate_timeseries
from src.controller.api_requests import antartida_api_request, download_timeseries
from src.schemas import AEMETResponse, DataType, MeteoStation, TimeAggregation


router = APIRouter(prefix="/weather", tags=["Weather"])


@router.get("/timeseries")
def get_timeseries(
    meteo_station: Annotated[MeteoStation, Query(..., description="Meteo station to retrieve data from.")],
    datetime_start: Annotated[str, Query(pattern=settings.DATETIME_PATTERN)],
    datetime_end: Annotated[str, Query(pattern=settings.DATETIME_PATTERN)],
    time_aggregation: Annotated[
        TimeAggregation | None,
        Query(
            description="Aggregation that the user requires or None.",
        ),
    ] = None,
    data_types: Annotated[
        list[DataType] | None,
        Query(description="Data types: temperature, pressure, speed. If not provided, all types are returned."),
    ] = None,
) -> dict:
    """Return timeseries data based on the specified parameters."""
    try:
        data: AEMETResponse = antartida_api_request(datetime_start, datetime_end, meteo_station)
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