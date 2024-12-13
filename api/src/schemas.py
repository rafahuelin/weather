"""Schemas to validate the request parameters."""

from enum import Enum

from pydantic import BaseModel


DATETIME_FORMAT = "%Y-%m-%dT%H:%M:%SUTC"


class TimeAggregation(str, Enum):
    """Time aggregation types."""

    NONE = "None"
    HOURLY = "Hourly"
    DAILY = "Daily"
    MONTHLY = "Monthly"


class DataType(str, Enum):
    """Represents different types of weather-related data."""

    TEMPERATURE = "temperature"
    PRESSURE = "pressure"
    SPEED = "speed"


class MeteoStation(str, Enum):
    """Enumeration for meteorological stations."""

    GABRIEL_DE_CASTILLA = "89070"
    JUAN_CARLOS_I = "89064"


class AEMETResponse(BaseModel):
    """Response content for AEMET API."""

    descripcion: str
    estado: int
    datos: str
    metadatos: str
