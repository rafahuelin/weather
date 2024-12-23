"""Main package for the API."""

from logging import getLogger

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from src.setup.logging_config import setup_logging
from src.views import weather

setup_logging()
logger = getLogger(__name__)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(weather.router)

logger.info("FastAPI application setup complete.")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
