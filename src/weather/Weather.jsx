import React, { useState } from 'react'
import './Weather.css'

const Weather = () => {
  const [city, setcity] = useState('')
  const [weather,setweather] = useState('null')
  const apikey = "06284bd84e513c503a607873c3f1ff73";
  
  const fetchDatafromApi = async () => {
    const api = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric
`)
    const data = await api.json();
    setweather(data);
    console.log(data)

  };

  return (
    <>
  
   <div className='weather'>
    <div className='search'>
    
      <input type='text' value={city} onChange={(e)=>setcity(e.target.value)}/>
      <button onClick={fetchDatafromApi}>Click</button>
    </div>
    
  
    {weather && weather.main ? (
          <div className="weather-info">
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels Like: {weather.main.feels_like}°C</p>
            <p>Max Temperature: {weather.main.temp_max}°C</p>
            <p>Min Temperature: {weather.main.temp_min}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
          </div>
        ) : (
          <p>No weather data available. Please search for a valid city.</p>
        )}
    </div>
 
    </>
  )
}

export default Weather;