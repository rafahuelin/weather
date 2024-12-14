"""Unit tests for the CRUD operations related to the weather API."""

from typing import TYPE_CHECKING

from sqlmodel import select, Session

from src.db import crud
from src.db.models import LastUpdate

if TYPE_CHECKING:
    from datetime import datetime


def test_last_update(db: Session) -> None:
    """Test the track_last_update function."""
    crud.track_last_update(db)

    last_update_1: datetime = crud.get_last_update(db)
    assert last_update_1 is not None

    crud.track_last_update(db)
    last_update_2: datetime = crud.get_last_update(db)

    # Assert that the LastUpdate entry is updated
    assert last_update_2 is not None
    assert last_update_2 > last_update_1

    # check last update uniqueness
    all_updates = db.exec(select(LastUpdate)).all()
    assert len(all_updates) == 1
