import React, { useState } from 'react'
import { getWeatherTimeseries, WeatherData } from '../api/weather'
import { TimeAggregation as TimeAggregationEnum, DataType as DataTypeEnum, stations } from '../enums'
import { TimeAggregation, DataType } from '../types'

interface WeatherFormProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const WeatherForm: React.FC<WeatherFormProps> = ({ setWeatherData, setLoading }) => {
  const [stationId, setStationId] = useState('')
  const [startDatetime, setStartDatetime] = useState('')
  const [endDatetime, setEndDatetime] = useState('')
  const [timeAggregation, setTimeAggregation] = useState<TimeAggregation | undefined>(undefined)
  const [dataTypes, setDataTypes] = useState<DataType[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

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
    } finally {
      setLoading(false)
    }
  }

  const handleDataTypeChange = (dataType: DataType) => {
    setDataTypes((prevDataTypes) =>
      prevDataTypes.includes(dataType) ?
        prevDataTypes.filter((type) => type !== dataType) :
        [...prevDataTypes, dataType],
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-10">
      <div>
        <label htmlFor="stationId" className="block text-sm font-medium text-gray-700">Station:</label>
        <select
          className="select select-bordered w-full max-w-xs"
          id="stationId"
          value={stationId}
          onChange={(e) => setStationId(e.target.value)}
          required
        >
          <option value="">Select a station</option>
          {Object.entries(stations).map(([stationName, stationId]) => (
            <option key={stationId} value={stationId}>
              {stationName}
            </option>
          ))}
        </select>
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
          <option value={TimeAggregationEnum.HOURLY}>Hourly</option>
          <option value={TimeAggregationEnum.DAILY}>Daily</option>
          <option value={TimeAggregationEnum.MONTHLY}>Monthly</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Data Types:</label>
        <div className='space-x-3 mt-3'>
          {([DataTypeEnum.TEMPERATURE, DataTypeEnum.PRESSURE, DataTypeEnum.SPEED] as DataType[]).map((dataType) => (
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
  )
}

export default WeatherForm
