import React from 'react';
import PropTypes from 'prop-types';
import './WeatherHeader.css';

const WeatherHeader = ({ currentCity, description }) => {
  return (
    <div className="weatherHeader">
      <div className="titleWrapper">
        <p className="currentCity">{currentCity}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

WeatherHeader.propTypes = {
  description: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default WeatherHeader;
