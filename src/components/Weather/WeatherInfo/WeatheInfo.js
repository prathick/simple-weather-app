import React from 'react';
import PropTypes from 'prop-types';
import './WeatherInfo.css';

const WeatherInfo = ({ temperature, clouds, speed, unit, roundTemp }) => {
  const { min, max, feelsLike } = temperature;
  const { visibility, humidity } = clouds;
  return (
    <div className="weatherContentWrapper">
      <div className="weatherContent">
        <p className="contentTitle">Low</p>
        <p className="contentValue">{roundTemp(min)}°</p>
      </div>
      <div className="weatherContent">
        <p className="contentTitle">High</p>
        <p className="contentValue">{roundTemp(max)}°</p>
      </div>
      <div className="weatherContent">
        <p className="contentTitle">Visibility</p>
        <p className="contentValue">{visibility} m</p>
      </div>
      <div className="weatherContent">
        <p className="contentTitle">humidity</p>
        <p className="contentValue">{humidity}%</p>
      </div>
      <div className="weatherContent">
        <p className="contentTitle">Feels Like</p>
        <p className="contentValue">{roundTemp(feelsLike)}°</p>
      </div>
      <div className="weatherContent">
        <p className="contentTitle">Wind Speed</p>
        <p className="contentValue">
          {speed} {unit === 'metric' ? 'm/s' : 'miles/h'}
        </p>
      </div>
    </div>
  );
};

WeatherInfo.propTypes = {
  temperature: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired
  }).isRequired,
  clouds: PropTypes.shape({
    visibility: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired
  }).isRequired,
  speed: PropTypes.number.isRequired
};

export default WeatherInfo;
