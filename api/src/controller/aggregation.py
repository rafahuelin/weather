"""Aggregation functions for timeseries data."""

from datetime import datetime
from logging import getLogger
from typing import Literal

import pandas as pd
from timezonefinder import TimezoneFinder

from src.db.models import WeatherData


logger = getLogger(__name__)


def parse_weather_data(raw_data: list[dict]) -> list[WeatherData]:
    """Parse raw weather data into a list of WeatherData objects."""
    weather_data_list = []
    for entry in raw_data:
        weather_data = WeatherData(
            station_id=entry["idema"],
            timestamp=datetime.fromisoformat(entry["fint"]),
            temperature=entry.get("ta"),
            pressure=entry.get("pres"),
            speed=entry.get("vv"),
            latitude=entry.get("lat"),
            longitude=entry.get("lon"),
        )
        weather_data_list.append(weather_data)
    return weather_data_list


def get_timezone(entry: dict | WeatherData) -> str:
    """Human readable timezone from latitude and longitude."""
    if type(entry) is WeatherData:
        latitude, longitude = entry.latitude, entry.longitude
    else:
        latitude, longitude = entry["latitud"], entry["longitud"]
    tf = TimezoneFinder()
    logger.info(f"Getting timezone for latitude: {latitude}, longitude: {longitude}")
    return tf.timezone_at(lat=latitude, lng=longitude)


COLUMNS_MAPPING: dict[str, str] = {
    "temperature": "Temperature (ºC)",
    "pressure": "Pressure (hpa)",
    "speed": "Speed (m/s)",
}

MAPPING: dict[str, str] = {
    "temperature": "temp",
    "pressure": "pres",
    "speed": "vel",
}


def _build_row(data_types: list[str], entry: dict) -> dict:
    """Build a row for the DataFrame. Working for both WeatherData and raw data."""
    row = {
        "Station": entry.get("nombre") or entry.get("station_id"),
        "Datetime": entry.get("fhora") or entry.get("timestamp"),
    }
    for col in data_types:
        if col in COLUMNS_MAPPING:
            if col in entry:
                row[COLUMNS_MAPPING[col]] = entry[col]
            elif MAPPING[col] in entry:
                row[COLUMNS_MAPPING[col]] = entry[MAPPING[col]]
            elif col is WeatherData and col.value in entry:
                row[COLUMNS_MAPPING[col]] = entry[col.value]
            else:
                msg = f"Column {col} not found in entry."
                logger.error(msg)
                raise ValueError(msg)
    return row


def _convert_weather_data_to_dict(timeseries: list[WeatherData]) -> list[dict]:
    """Convert WeatherData object to dictionary."""
    timeseries = [data.__dict__ for data in timeseries]
    allowed_keys = ("station_id", "timestamp", "temperature", "pressure", "speed")
    return [{k: v for k, v in entry.items() if k in allowed_keys} for entry in timeseries]


def build_df(timeseries: list[dict | WeatherData], data_types: list[str] | None = None) -> pd.DataFrame:
    """Build a DataFrame from the timeseries data.

    data_types: can be "pressure", "temperature", "speed"
    """
    if len(timeseries) > 0 and type(timeseries[0]) is WeatherData:
        timeseries = _convert_weather_data_to_dict(timeseries)

    if data_types is None:
        data_types = ["temperature", "pressure", "speed"]

    data = []
    for entry in timeseries:
        row: dict = _build_row(data_types, entry)
        data.append(row)

    df_timeseries = pd.DataFrame(data)
    df_timeseries["Datetime"] = pd.to_datetime(df_timeseries["Datetime"])
    if df_timeseries["Datetime"].dt.tz is None:
        df_timeseries["Datetime"] = df_timeseries["Datetime"].dt.tz_localize("UTC")
    df_timeseries["Datetime"] = df_timeseries["Datetime"].dt.tz_convert("UTC")
    df_timeseries.set_index("Datetime", inplace=True)  # noqa: PD002

    return df_timeseries


def _resample_and_aggregate(df: pd.DataFrame, rule: Literal["H", "D", "M"]) -> pd.DataFrame:
    """Resample and aggregate the DataFrame to Hourly, Daily or Monthly."""
    numeric_df = df.select_dtypes(include="number")
    non_numeric_df = df.select_dtypes(exclude="number")
    numeric_aggregated = numeric_df.resample(rule).mean(numeric_only=True)
    non_numeric_aggregated = non_numeric_df.resample(rule).first()
    return pd.concat([numeric_aggregated, non_numeric_aggregated], axis=1)


def aggregate_timeseries(
    timeseries: list[dict | WeatherData],
    time_aggregation: str | None = None,
    data_types: list[str] | None = None,
) -> pd.DataFrame:
    """Aggregate timeseries data."""
    df_timeseries: pd.DataFrame = build_df(timeseries, data_types)
    logger.debug(f"Built unaggregated timeseries: {df_timeseries}")

    if time_aggregation is None:
        df_aggregated = df_timeseries
    elif time_aggregation == "Hourly":
        df_aggregated = _resample_and_aggregate(df_timeseries, "H")
    elif time_aggregation in ["Daily", "Monthly"]:
        timezone = get_timezone(timeseries[0])
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
    logger.debug(f"Aggregated timeseries: {df_aggregated}")
    return df_aggregated
