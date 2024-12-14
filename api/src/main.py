"""Main package for the API."""

from fastapi import FastAPI
from src.views import weather


app = FastAPI()
app.include_router(weather.router)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
