import { useState } from 'react'
import axios from "axios";

import './App.css'

function App() {
  const [city , setCity] = useState(""); 
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState("");

  const API_KEY = "7e40fad536cb024a899dbd8257ee55dc";

  const getWeather = async(city) => {
    if(!city.trim()) return;

    try{
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

      );
      setWeather(res.data);
      setError("");
    }catch(err){
      setError("City not found");
      setWeather(null);
    }
    }

  return (

    <div className="container">
     <h1>This is a weather app.</h1>
       <div className="search">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
        placeholder='Enter your city...'
        />
        <button onClick={()=>getWeather(city)}>Search</button>
       </div>

       {error && <p className='error'>{error} </p>}

       {weather && (
        <div className="weather-box">
          <h2>{weather.name},{weather.sys.country}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Speed: {weather.wind.speed}km/h</p>
        </div>
       )}
    </div>
  )
}

export default App
