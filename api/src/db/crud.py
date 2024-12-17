"""CRUD operations."""

from datetime import datetime, timezone
from logging import getLogger
from typing import TYPE_CHECKING

from sqlmodel import Session, select

if TYPE_CHECKING:
    from sqlmodel.sql.expression import SelectOfScalar

from src.db.models import LastUpdate, WeatherData


logger = getLogger(__name__)

# Update tracking


def get_last_update(db: Session) -> datetime | None:
    """Retrieve the last update timestamp from the database."""
    logger.info("Getting last update timestamp.")
    last_update = db.exec(select(LastUpdate).where(LastUpdate.update_id == 1)).first()
    return datetime.fromisoformat(last_update.timestamp) if last_update else None


def get_last_update_date(session: Session) -> datetime:
    """Get the last update date from the database."""
    last_update = session.query(WeatherData.timestamp).order_by(WeatherData.timestamp.desc()).first()
    return last_update[0] if last_update else datetime.min


def track_last_update(db: Session) -> None:
    """Track the last update timestamp in the database."""
    last_update = db.exec(select(LastUpdate).where(LastUpdate.update_id == 1)).first()
    current_timestamp = datetime.now(timezone.utc)
    if last_update:
        last_update.timestamp = current_timestamp
    else:
        last_update = LastUpdate(timestamp=current_timestamp)
        db.add(last_update)
    db.commit()
    logger.info(f"Tracked update timestamp: {current_timestamp}")


# Weather data operations


def get_station_timeseries(
    session: Session,
    station_id: str,
    start_dt: datetime,
    end_dt: datetime,
) -> list[WeatherData]:
    """Retrieve weather data timeseries for a specific station within a date range.

    :param session: Database session.
    :param station_id: ID of the weather station.
    :param start_dt: Start datetime for the timeseries.
    :param end_dt: End datetime for the timeseries.
    :return: List of WeatherData objects.
    """
    statement: SelectOfScalar = select(WeatherData).where(
        WeatherData.station_id == station_id,
        WeatherData.timestamp.between(start_dt, end_dt),
    )
    results: list[WeatherData] = session.exec(statement).all()
    return results


def is_timeseries_empty(session: Session) -> bool:
    """Check if the weather data timeseries is empty."""
    statement: SelectOfScalar = select(WeatherData).limit(1)
    results: list[WeatherData] = session.exec(statement).all()
    return not bool(results)


def store_weather_data(session: Session, data: list[WeatherData]) -> None:
    """Store weather data in the database."""
    try:
        last_update_date: datetime | None = get_last_update(session)
        if last_update_date is None:
            # No previous update, store all data
            filtered_data = data
        else:
            filtered_data = [record for record in data if record.timestamp > last_update_date]
        if filtered_data:
            session.add_all(filtered_data)
            session.commit()
            track_last_update(session)
        else:
            logger.info("No new data to store.")
    except Exception:
        logger.exception("Error storing weather data")
        raise
