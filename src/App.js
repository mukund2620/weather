import "./App.css";
import { useState } from "react";

const api = {
  key: "6af01f21bc59c658eb835d769d9d8e52",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">

        <h1 >LetsUpgrad Assignment 2</h1>
        <h3>Weather App</h3>
        <div className="details">
          <input
          style={{marginBottom: "2rem"}}
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button-29" onClick={searchPressed}>Search</button>
        </div>

        
        {typeof weather.main !== "undefined" ? (
          <div>
        
            <p>City/town: {weather.name}</p>

            
            <p>Temp: {weather.main.temp}°C</p>

        
            <p>Condition: {weather.weather[0].main}, ({weather.weather[0].description})</p>
    
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
