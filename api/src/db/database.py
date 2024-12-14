"""Database setup and initialization."""

from collections.abc import Generator

from sqlmodel import create_engine, SQLModel, Session, SessionLocal

from src.config import DATABASE_URL

engine = create_engine(DATABASE_URL)


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
