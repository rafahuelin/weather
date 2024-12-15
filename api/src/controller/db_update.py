"""Database update controller."""

from datetime import datetime, timezone

from sqlmodel import Session
from src.db import crud


def needs_api_fetch(session: Session, end_datetime: datetime, trigger_time: int = 1) -> bool:
    """Check if the database needs to be updated with new data from the API.

    trigger_time in hours
    """
    current_datetime: datetime = datetime.now(timezone.utc)
    if end_datetime > current_datetime:
        msg = "End datetime is in the future."
        raise ValueError(msg)

    last_update: datetime | None = crud.get_last_update(session)
    if last_update is None or crud.is_timeseries_empty(session):
        return True

    elapsed_time: float = (current_datetime - last_update).total_seconds() / 3600
    return (end_datetime > last_update) or (elapsed_time >= trigger_time)
