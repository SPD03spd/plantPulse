import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import searchIcon from "../../assets/ECOM_img/search.png";
import clear from "../../assets/ECOM_img/clear.png";
import cloud from "../../assets/ECOM_img/cloud.png";
import drizzle from "../../assets/ECOM_img/drizzle.png";
import humidity from "../../assets/ECOM_img/humidity.png";
import rain from "../../assets/ECOM_img/rain.png";
import snow from "../../assets/ECOM_img/snow.png";
import wind from "../../assets/ECOM_img/wind.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const searchWeather = async (city) => {
    if (!city) {
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(null);
      console.error("Error in fetching weather data", error);
    }
  };

  useEffect(() => {
    searchWeather("New York");
  }, []);

  return (
    <div className="weather-page">
      <div className="weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search city" />
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => searchWeather(inputRef.current.value)}
          />
        </div>
        {weatherData ? (
          <>
            <img
              src={weatherData.icon}
              alt="Weather Icon"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.temperature}° C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity} alt="Humidity" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Speed" />
                <div>
                  <p>{weatherData.windSpeed} km/hr</p>
                  <span>Wind speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="error">Weather data not available</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
