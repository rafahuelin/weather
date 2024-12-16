import React, { useState } from 'react'
import { getWeatherTimeseries, WeatherData } from '../api/weather'

const Weather: React.FC = () => {
  const [stationId, setStationId] = useState('')
  const [startDatetime, setStartDatetime] = useState('')
  const [endDatetime, setEndDatetime] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const convertToUTC = (datetime: string) => {
      const date = new Date(datetime)
      return date.toISOString().replace('.000', '').replace('Z', '+0000')
    }

    const startDatetimeUTC = convertToUTC(startDatetime)
    const endDatetimeUTC = convertToUTC(endDatetime)

    try {
      const data = await getWeatherTimeseries(stationId, startDatetimeUTC, endDatetimeUTC)
      setWeatherData(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <label htmlFor="stationId" className="block text-sm font-medium text-gray-700">Station ID:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="stationId"
            value={stationId}
            onChange={(e) => setStationId(e.target.value)}
            required
            placeholder='Station ID'
          />
        </div>
        <div>
          <label htmlFor="startDatetime" className="block text-sm font-medium text-gray-700">Start Datetime:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="datetime-local"
            id="startDatetime"
            value={startDatetime}
            onChange={(e) => setStartDatetime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endDatetime" className="block text-sm font-medium text-gray-700">End Datetime:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="datetime-local"
            id="endDatetime"
            value={endDatetime}
            onChange={(e) => setEndDatetime(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-outline btn-info" type="submit">Fetch Weather Data</button>
      </form>

      <h1 className='text-3xl'>Weather Data</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Datetime</th>
            <th>Temperature (ºC)</th>
            <th>Speed (m/s)</th>
            <th>Station</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.Datetime}</td>
              <td>{entry['Temperature (ºC)']}</td>
              <td>{entry['Speed (m/s)']}</td>
              <td>{entry.Station}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Weather
