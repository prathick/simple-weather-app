import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getWeather } from '../../services/weather';
import './Weather.css';
import FatalError from '../FatalError/FatalError';
import WeatherInfo from './WeatherInfo/WeatheInfo';
import Refresh from './Refresh/Refresh';
import WeatherHeader from './WeatherHeader/WeatherHeader';
import CurrentWeather from './CurrentWeather/CurrentWeather';

const Weather = ({ currentCity, weather, setWeather }) => {
  const [unit, setUnit] = useState('metric');
  const [fatalError, setFatalError] = useState(false);
  const roundTemp = temp => Math.round(temp);

  const fetchWeather = async () => {
    try {
      const weatherReport = await getWeather(currentCity, unit);
      setWeather(weatherReport.getCityByName.weather);
    } catch (error) {
      setFatalError(true);
      console.log(error);
    }
  };

  useEffect(async () => {
    fetchWeather();
  }, [unit]);

  if (!weather) return null;

  const { temperature, clouds, summary, wind, timestamp } = weather;
  if (!temperature && !clouds && !summary && !wind && !timestamp && fatalError)
    return (
      <div className="wrapper">
        <FatalError />
      </div>
    );

  return (
    <div className="weatherWrapper">
      <WeatherHeader
        description={summary.description}
        currentCity={currentCity}
      />
      <CurrentWeather
        currentTemp={temperature.actual}
        description={summary.description}
        icon={summary.icon}
        unit={unit}
        setUnit={setUnit}
        roundTemp={roundTemp}
      />
      <hr className="lineSeparator" />
      <WeatherInfo
        temperature={temperature}
        clouds={clouds}
        speed={wind.speed}
        unit={unit}
        roundTemp={roundTemp}
      />
      <Refresh timestamp={timestamp} fetchWeather={fetchWeather} />
    </div>
  );
};

Weather.propTypes = {
  currentCity: PropTypes.string,
  weather: PropTypes.shape({
    temperature: PropTypes.object.isRequired,
    clouds: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired,
    summary: PropTypes.object.isRequired,
    timestamp: PropTypes.number.isRequired
  }),
  setWeather: PropTypes.func
};

Weather.defaultProps = {
  currentCity: undefined,
  weather: undefined,
  setWeather: undefined
};

export default Weather;
