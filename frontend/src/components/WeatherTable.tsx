import React from 'react'
import { WeatherData } from '../api/weather'

interface WeatherTableProps {
  weatherData: WeatherData[]
  loading: boolean
}

const WeatherTable: React.FC<WeatherTableProps> = ({ weatherData, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center mt-7">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : weatherData.length > 0 ? (
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
      ) : (
        <p>Please search</p>
      )}
    </div>
  )
}

export default WeatherTable
