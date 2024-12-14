"""Database setup and initialization."""

from collections.abc import Generator

from sqlalchemy.orm import sessionmaker
from sqlmodel import create_engine, SQLModel, Session

from src.config import settings


engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def init_db() -> None:
    """Initialize the database by creating all tables."""
    SQLModel.metadata.create_all(engine)


def get_db() -> Generator[Session, None, None]:
    """Provide a database session instance."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


init_db()
