import React, { useState } from 'react'
import { getWeatherTimeseries, WeatherData } from '../api/weather'
import { TimeAggregation, DataType } from '../enums'

const Weather: React.FC = () => {
  const [stationId, setStationId] = useState('')
  const [startDatetime, setStartDatetime] = useState('')
  const [endDatetime, setEndDatetime] = useState('')
  const [timeAggregation, setTimeAggregation] = useState<TimeAggregation | undefined>(undefined)
  const [dataTypes, setDataTypes] = useState<string[]>([])
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
      const data = await getWeatherTimeseries(stationId, startDatetimeUTC, endDatetimeUTC, timeAggregation, dataTypes)
      setWeatherData(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const handleDataTypeChange = (dataType: string) => {
    setDataTypes((prevDataTypes) =>
      prevDataTypes.includes(dataType) ?
        prevDataTypes.filter((type) => type !== dataType) :
        [...prevDataTypes, dataType],
    )
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
        <div>
          <label htmlFor="timeAggregation" className="block text-sm font-medium text-gray-700">Time Aggregation:</label>
          <select
            className="select select-bordered w-full max-w-xs"
            id="timeAggregation"
            value={timeAggregation}
            onChange={(e) => setTimeAggregation(e.target.value as TimeAggregation)}
          >
            <option value="">None</option>
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Data Types:</label>
          <div className='space-x-3 mt-3'>
            {Object.values(DataType).map((dataType) => (
              <label key={dataType} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info"
                  value={dataType}
                  checked={dataTypes.includes(dataType)}
                  onChange={() => handleDataTypeChange(dataType)}
                />
                <span className="ml-2">{dataType}</span>
              </label>
            ))}
          </div>
        </div>
        <button className="btn btn-outline btn-info" type="submit">Fetch Weather Data</button>
      </form>

      <h1 className='text-3xl'>Weather Data</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Datetime</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hpa)</th>
            <th>Speed (m/s)</th>
            <th>Station</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.Datetime}</td>
              <td>{entry['Temperature (ºC)']}</td>
              <td>{entry['Pressure (hpa)']}</td>
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
