"""Configuration for the application."""

import re

from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Settings for the application."""

    API_KEY: str = Field(description="Aemet API key")
    DATETIME_PATTERN: re.Pattern = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}UTC$")


settings = Settings()
