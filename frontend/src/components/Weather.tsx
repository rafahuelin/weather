import React, { useState } from 'react'
import { WeatherData } from '../api/weather'
import WeatherForm from './WeatherForm'
import WeatherTable from './WeatherTable'

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="p-4">
      <WeatherForm setWeatherData={setWeatherData} setLoading={setLoading} />
      <div className="divider">
        <h1 className='text-3xl'>Weather Data</h1>
      </div>
      <WeatherTable weatherData={weatherData} loading={loading} />
    </div>
  )
}

export default Weather
