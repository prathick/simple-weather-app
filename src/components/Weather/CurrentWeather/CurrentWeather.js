import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './CurrentWeather.css';

const CurrentWeather = ({
  icon,
  currentTemp,
  description,
  unit,
  setUnit,
  roundTemp
}) => {
  const weatherIconBaseUrl = 'http://openweathermap.org/img/wn/';
  return (
    <div className="currentWeatherWrapper">
      <img src={`${weatherIconBaseUrl}/${icon}@2x.png`} alt={description} />
      <p className="currentWeather">{roundTemp(currentTemp)}°</p>
      <button
        className={classnames('unitBtn', { active: unit === 'metric' })}
        onClick={() => setUnit('metric')}
      >
        C
      </button>
      |
      <button
        className={classnames('unitBtn', { active: unit === 'imperial' })}
        onClick={() => setUnit('imperial')}
      >
        F
      </button>
    </div>
  );
};

CurrentWeather.propTypes = {
  icon: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  setUnit: PropTypes.func.isRequired,
  roundTemp: PropTypes.func.isRequired
};

export default CurrentWeather;
