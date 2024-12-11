"""Pytest configuration."""

from typing import Any
from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient

from src.main import app


@pytest.fixture()
def client() -> Generator[TestClient, Any, None]:
    """Create a FastAPI TestClient fixture."""
    with TestClient(app) as client:
        yield client
