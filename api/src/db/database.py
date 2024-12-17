"""Database setup and initialization."""

import sys
from collections.abc import Generator

from sqlmodel import Session, SQLModel, create_engine

from src.setup.config import settings


DATABASE_URL = settings.TEST_DATABASE_URL if "pytest" in sys.modules else settings.DATABASE_URL
engine = create_engine(DATABASE_URL, echo=False)

SQLModel.metadata.create_all(engine)


def get_db() -> Generator[Session, None, None]:
    """Provide a database session."""
    with Session(engine) as session:
        yield session
