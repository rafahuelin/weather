import React, { useState } from 'react'
import { WeatherData } from '../api/weather'
import WeatherForm from './WeatherForm'
import WeatherTable from './WeatherTable'

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  return (
    <div className="p-4">
      <WeatherForm setWeatherData={setWeatherData} />
      <WeatherTable weatherData={weatherData} />
    </div>
  )
}

export default Weather
