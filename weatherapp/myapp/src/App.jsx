import React, { useState } from 'react';
import './App.css';
export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e3d2652ebb06f271740c2c804db712c&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data));
  };

  return (
  <div className="app">
    <div className="card">

      <h2 className="title">🌤 Weather Report</h2>

      <div className="searchBox">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
        />
        <button onClick={getWeather}>Show Report</button>
      </div>

      {weather && weather.cod === "404" && (
        <p className="error">City not found</p>
      )}

      {weather && weather.weather && (
        <div className="weatherBox">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>🌥 {weather.weather[0].description}</p>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>🤗 Feels Like: {weather.main.feels_like} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}

    </div>
  </div>
);
}