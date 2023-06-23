import React, { useState } from "react";
import axios from "axios";
export default function () {
  const [input, setInput] = useState("");
  const [details, setDetails] = useState("");

  function showTemp(response) {
    let weather = {
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    };
    setDetails(
      <ul>
        <li>Temperature: {weather.temperature}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity} %</li>
        <li>
          {" "}
          <img src={weather.icon} alt="icon"></img>
        </li>
      </ul>
    );
  }

  function showDetails(event) {
    event.preventDefault();
    let apiKey = "a49f0cad903e09dc8e1t8o40aab88ab3";
    let url = `https://api.shecodes.io/weather/v1/current?query=${input}&key=${apiKey}`;
    axios.get(url).then(showTemp);
  }

  function showCity(event) {
    setInput(event.target.value);
  }

  return (
    <div className="weather">
      <h2>Wehather Search Engine</h2>
      <h3>You can search over 200,000 cities around the world !</h3>
      <form onSubmit={showDetails}>
        <input
          type="text"
          placeholder="Enter a city..."
          autoFocus={false}
          onChange={showCity}
        />
        <input type="submit" value="search" />
      </form>
      <h4>{details}</h4>
      <p>
        <a href="https://github.com/hedoshro/react-w4-hw" target="_blank">
          open-source
        </a>{" "}
        coded by Hedie Rahimi
      </p>
    </div>
  );
}
