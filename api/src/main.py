"""Main package for the API."""


from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root() -> dict:
    """"Return a greeting."""
    return {"Hello": "World"}
