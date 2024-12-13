"""Aggregation functions for timeseries data."""

from typing import Literal
import pandas as pd
from timezonefinder import TimezoneFinder


def get_timezone(latitude: float, longitude: float) -> str:
    """Human readable timezone from latitude and longitude."""
    tf = TimezoneFinder()
    return tf.timezone_at(lat=latitude, lng=longitude)


def build_df(timeseries: list[dict], data_types: list[str] | None = None) -> pd.DataFrame:
    """Build a DataFrame from the timeseries data.

    data_types: can be "pressure", "temperature", "speed"
    """
    mapping = {
        "temperature": "temp",
        "pressure": "pres",
        "speed": "vel",
    }
    if data_types is None:
        data_types = ["temperature", "pressure", "speed"]
    columns_mapping = {
        "temperature": "Temperature (ºC)",
        "pressure": "Pressure (hpa)",
        "speed": "Speed (m/s)",
    }

    data = []
    for entry in timeseries:
        row = {
            "Station": entry["nombre"],
            "Datetime": entry["fhora"],
        }
        for col in data_types:
            if col in columns_mapping:
                row[columns_mapping[col]] = entry[mapping[col]]
        data.append(row)

    df_timeseries = pd.DataFrame(data)
    df_timeseries["Datetime"] = pd.to_datetime(df_timeseries["Datetime"]).dt.tz_convert("UTC")
    df_timeseries.set_index("Datetime", inplace=True)  # noqa: PD002

    return df_timeseries


def _resample_and_aggregate(df: pd.DataFrame, rule: Literal["H", "D", "M"]) -> pd.DataFrame:
    numeric_df = df.select_dtypes(include="number")
    non_numeric_df = df.select_dtypes(exclude="number")
    numeric_aggregated = numeric_df.resample(rule).mean(numeric_only=True)
    non_numeric_aggregated = non_numeric_df.resample(rule).first()
    return pd.concat([numeric_aggregated, non_numeric_aggregated], axis=1)


def aggregate_timeseries(
    timeseries: list[dict],
    time_aggregation: str,
    data_types: list[str] | None = None,
) -> pd.DataFrame:
    """Aggregate timeseries data."""
    df_timeseries: pd.DataFrame = build_df(timeseries, data_types)

    if time_aggregation is None:
        df_aggregated = df_timeseries
    elif time_aggregation == "Hourly":
        df_aggregated = _resample_and_aggregate(df_timeseries, "H")
    elif time_aggregation in ["Daily", "Monthly"]:
        timezone = get_timezone(timeseries[0]["latitud"], timeseries[0]["longitud"])
        if df_timeseries.index.tz is None:
            df_timeseries.index = df_timeseries.index.tz_localize(timezone)
        else:
            df_timeseries.index = df_timeseries.index.tz_convert(timezone)
        granularity_param = "D" if time_aggregation == "Daily" else "M"
        df_aggregated = _resample_and_aggregate(df_timeseries, granularity_param)
    else:
        msg = "Invalid time aggregation value."
        raise ValueError(msg)

    df_aggregated.index = df_aggregated.index.tz_convert("Europe/Madrid")
    df_aggregated = df_aggregated.reset_index()
    df_aggregated["Datetime"] = df_aggregated["Datetime"].dt.strftime("%Y-%m-%d %H:%M:%S%z")
    return df_aggregated
