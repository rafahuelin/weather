// src/api/weather.ts

export interface WeatherData {
  Datetime: string;
  'Temperature (ºC)'?: number;
  'Pressure (hpa)'?: number;
  'Speed (m/s)'?: number;
  Station: string;
}

export async function getWeatherTimeseries (
  stationId: string,
  startDatetime: string,
  endDatetime: string,
  timeAggregation?: string,
  dataTypes?: string[],
): Promise<WeatherData[]> {
  const params = new URLSearchParams({
    'station_id': stationId,
    'start_datetime': startDatetime,
    'end_datetime': endDatetime,
  })

  if (timeAggregation) {
    params.append('time_aggregation', timeAggregation)
  }

  if (dataTypes) {
    dataTypes.forEach((type) => params.append('data_types', type))
  }

  const response = await fetch(`/weather?${params.toString()}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const result = await response.json()
  return result.data as WeatherData[]
}
