import React, { useState } from 'react'
import { WeatherData } from '../api/weather'
import WeatherForm from './WeatherForm'
import WeatherTable from './WeatherTable'

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  return (
    <div className="p-4">
      <WeatherForm setWeatherData={setWeatherData} />
      <div className="divider">
        <h1 className='text-3xl'>Weather Data</h1>
      </div>
      <WeatherTable weatherData={weatherData} />
    </div>
  )
}

export default Weather
