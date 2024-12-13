"""Unit tests for the aggregation module."""

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import pandas as pd
from api.tests.conftest import Measurement
from src.schemas import TimeAggregation
from src.controller.aggregation import build_df, aggregate_timeseries, get_timezone


def test_get_timezone() -> None:
    """Test timezone given coordinates."""
    lat: float = -62.66325
    lon: float = -60.38959
    timezone = get_timezone(lat, lon)
    assert timezone == "America/Punta_Arenas"


def test_build_df(measurements_data: Measurement) -> None:
    """Test the build_df function with two data types."""
    data_types = ["temperature", "speed"]
    df_timeseries: pd.DataFrame = build_df(measurements_data.measurements, data_types)
    assert df_timeseries.index.name == "Datetime"
    assert df_timeseries.index.dtype == "datetime64[ns, UTC]"
    assert all(c in ["Station", "Temperature (ºC)", "Speed (m/s)"] for c in df_timeseries.columns)
    assert df_timeseries.shape[0] == len(measurements_data.measurements)


def test_build_df_default_data_types(measurements_data: Measurement) -> None:
    """Test the build_df function with default data types."""
    df_timeseries: pd.DataFrame = build_df(measurements_data.measurements)
    assert df_timeseries.index.name == "Datetime"
    assert df_timeseries.index.dtype == "datetime64[ns, UTC]"
    assert df_timeseries.shape[0] == len(measurements_data.measurements)
    assert all(c in ["Station", "Temperature (ºC)", "Speed (m/s)", "Pressure (hpa)"] for c in df_timeseries.columns)


def _count_unique(data_list: list[dict], aggregation: TimeAggregation) -> int:
    """Extract unique time periods from fhora field based on aggregation level."""
    if aggregation == TimeAggregation.HOURLY:
        time_starts = {item["fhora"][:13] for item in data_list}
    elif aggregation == TimeAggregation.DAILY:
        time_starts = {item["fhora"][:10] for item in data_list}
    elif aggregation == TimeAggregation.MONTHLY:
        time_starts = {item["fhora"][:7] for item in data_list}
    return len(time_starts)


def test_aggregate_timeseries(measurements_data: Measurement) -> None:
    """Test the aggregate_timeseries function."""
    df_not_aggregated: pd.DataFrame = build_df(measurements_data.measurements)
    assert len(df_not_aggregated) == len(measurements_data.measurements)

    df_aggregated_hourly: pd.DataFrame = aggregate_timeseries(measurements_data.measurements, TimeAggregation.HOURLY)
    assert len(df_aggregated_hourly) == _count_unique(measurements_data.measurements, TimeAggregation.HOURLY)

    df_aggregated_daily: pd.DataFrame = aggregate_timeseries(measurements_data.measurements, TimeAggregation.DAILY)
    assert len(df_aggregated_daily) == measurements_data.AGGREGATED_DAYS_AMOUNT
    assert len(df_aggregated_daily) == _count_unique(measurements_data.measurements, TimeAggregation.DAILY)

    df_aggregated_monthly: pd.DataFrame = aggregate_timeseries(measurements_data.measurements, TimeAggregation.MONTHLY)
    assert len(df_aggregated_monthly) == _count_unique(measurements_data.measurements, TimeAggregation.MONTHLY)
    assert len(df_aggregated_monthly) == measurements_data.AGGREGATED_MONTHS_AMOUNT

    assert df_not_aggregated.index.name == "Datetime"
