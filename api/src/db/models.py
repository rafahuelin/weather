"""App database models."""

from sqlmodel import SQLModel, Field
from datetime import datetime


class WeatherData(SQLModel, table=True):
    """Represents weather data for a specific station and datetime."""

    station_id: str = Field(primary_key=True)
    timestamp: datetime = Field(primary_key=True)
    temperature: float | None = None
    pressure: float | None = None
    speed: float | None = None
