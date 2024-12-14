"""Database update controller."""

from datetime import datetime

from sqlmodel import Session
from src.db.crud import get_last_update


def needs_api_fetch(session: Session, end_datetime: datetime, trigger_time: int = 1) -> bool:
    """Check if the database needs to be updated with new data from the API.

    trigger_time in hours
    """
    last_update: datetime | None = get_last_update(session)
    if last_update is None:
        return True
    current_timestamp: datetime = datetime.now(datetime.timezone)
    elapsed_time: float = (current_timestamp - last_update).total_seconds() / 3600
    return (end_datetime > last_update) or (elapsed_time >= trigger_time)
