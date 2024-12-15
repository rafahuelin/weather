"""Database setup and initialization."""

from collections.abc import Generator

from sqlalchemy.orm import Session
from sqlmodel import SQLModel, Session as SQLModelSession, create_engine

from src.setup.config import settings


engine = create_engine(settings.DATABASE_URL)
SQLModel.metadata.create_all(engine)


def get_db() -> Generator[Session, None, None]:
    """Provide a database session."""
    with SQLModelSession(engine) as session:
        yield session
