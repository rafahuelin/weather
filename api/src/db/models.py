"""App database models."""

from sqlmodel import SQLModel, Field
from datetime import datetime, timezone


class WeatherData(SQLModel, table=True):
    """Represents weather data for a specific station and datetime."""

    station_id: str = Field(primary_key=True)
    timestamp: datetime = Field(primary_key=True)
    temperature: float | None = None
    pressure: float | None = None
    speed: float | None = None
    latitude: float | None = None
    longitude: float | None = None


class LastUpdate(SQLModel, table=True):
    """Represents the last db update."""

    update_id: int = Field(default=1, primary_key=True)
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
