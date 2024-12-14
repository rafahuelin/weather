"""CRUD operations."""

from datetime import datetime, timezone

from sqlmodel import Session, select

from src.db.models import LastUpdate, WeatherData


# Update tracking


def get_last_update(db: Session) -> datetime | None:
    """Retrieve the last update timestamp from the database."""
    last_update = db.exec(select(LastUpdate).where(LastUpdate.update_id == 1)).first()
    return last_update.timestamp if last_update else None


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
    statement = select(WeatherData).where(
        WeatherData.station_id == station_id,
        WeatherData.datetime.between(start_dt, end_dt),
    )
    results: list[WeatherData] = session.exec(statement).all()
    return results


def store_weather_data(session: Session, data: list[WeatherData]) -> None:
    """Store weather data in the database."""
    session.add_all(data)
    session.commit()
    track_last_update(session)
