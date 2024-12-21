## Weather Data app
![Weather App](docs/weather-app.gif)

### Run the app

#### Backend

With the project virtual environment activated, navigate to the root directory of the project and run the following command:

```shell
export PYTHONPATH=$(pwd)/api && uvicorn api.src.main:app --host 127.0.0.1 --port 8000 --reload
```
or run with VSCode

![Backend on VSCode](docs/run-backend-with-vscode.png)

#### Run tests

```shell
python -m pytest
```

or run the tests With VSCode

![Tests on VSCode](docs/run-tests-with-vscode.png)

#### Code coverage:
```shell
python -m pytest --cov=./api/src ./api/tests --cov-report=term-missing
```

```shell
---------- coverage: platform linux, python 3.12.8-final-0 -----------
Name                                 Stmts   Miss  Cover   Missing
------------------------------------------------------------------
api/src/__init__.py                      0      0   100%
api/src/controller/__init__.py           0      0   100%
api/src/controller/aggregation.py       83      6    93%   69-74, 136
api/src/controller/api_requests.py      27      3    89%   25, 37, 47
api/src/controller/db_update.py         13      4    69%   16-17, 23-24
api/src/db/__init__.py                   0      0   100%
api/src/db/crud.py                      46     11    76%   10, 29-30, 73-75, 86, 92-95
api/src/db/database.py                  10      2    80%   19-20
api/src/db/models.py                    13      0   100%
api/src/main.py                         14      2    86%   31-33
api/src/schemas.py                      20      0   100%
api/src/setup/__init__.py                0      0   100%
api/src/setup/config.py                  9      0   100%
api/src/setup/logging_config.py          4      0   100%
api/src/views/__init__.py                0      0   100%
api/src/views/weather.py                43      8    81%   11-12, 57-58, 85-91
------------------------------------------------------------------
TOTAL                                  282     36    87%


=============== 16 passed, 18 warnings in 11.03s =================
```

or tests with coverage on VSCode

![Test coverage on VSCode](docs/coverage-with-vscode.png)

or coverage displayed in VSCode

![Test coverage in VSCode's file explorer](docs/coverage-in-vscode-file-explorer.png)

#### Frontend

In another terminal, navigate to the frontend directory and run:

```shell
npm run dev
```

### Sequence Diagram
```mermaid
sequenceDiagram
    actor User
    User->>WeatherForm: Submit form
    WeatherForm->>Backend API: Request weather data
    Backend API->>CRUD Operations: Retrieve data
    CRUD Operations->>Database: Query weather data
    Database-->>CRUD Operations: Return data
    CRUD Operations-->>Backend API: Return data
    Backend API->>Backend API: Check data freshness
    alt Data not fresh
        Backend API->>AEMET API: Fetch new data
        AEMET API-->>Backend API: Return new data
        Backend API->>CRUD Operations: Store new data
        CRUD Operations->>Database: Update data
        Database-->>CRUD Operations: Confirm update
        CRUD Operations-->>Backend API: Data stored
    end
    Backend API-->>WeatherForm: Return weather data
    WeatherForm->>WeatherTable: Update weather table
```

### Metrics and Alerts

In order to ensure the application is reliable we would need to mesure the application stats
when running correctly. In that way we can be proactive and detect if some part is wrong.
For example:
1. API response time.
2. Database queries execution time.
3. Hardware metrics. CPU + RAM.
4. Downtime.
5. Data freshness.
6. Requests overload.


Alerts on specific situations:
1. 3rd party service failing. In this case AEMET API.
2. Responses failing.
3. Database connection lost or queries failing.
4. App server or database down.


### Avoid unnecessary requests to AEMET API

A simple system has been implemented, just before making a request I check if the
data has been updated less than hour ago, to prevent extra requests when the data
isn't updated in AEMET's API.
I check as well that the requested end datetime is newer than the last update datetime in that case we likely can provide it from the database.

A more robust system could be having a cronjob or a Celery worker fetching the data and storing it to the database, then the service, isn't in charge of making the requests to AEMET's API.


### Improve requests

1. Increase amount of workers.
2. API and DB caching.
3. Load balancer for quicker response. Allocating the server that will reply quicker.
4. Introduce asynchrony, liberating resources for instance when we send a request
   to the AEMET API.
5. Horizontal vs Vertical scaling.


### Authentication

1. Managed in the app. JWT is a common solution.
2. BaaS like Firebase can provide a secure and simple way of authenticating providing a wide scope of authentication methods, email+password, Google sign-in, ..

### Authorization

We could use roles permissions, for instance an admin could be triggering a request
to AEMET API, and a regular user would follow the current logic fetching data only the current conditions, certain time after the data was lastly updated.
