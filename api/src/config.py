"""Configuration for the application."""

from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Settings for the application."""

    API_KEY: str = Field(description="Aemet API key")


settings = Settings()
