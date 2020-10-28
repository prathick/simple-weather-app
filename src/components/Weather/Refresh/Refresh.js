import React from 'react';
import PropTypes from 'prop-types';
import './Refresh.css';

const Refresh = ({ timestamp, fetchWeather }) => {
  const timeFromTimeStamp = timeStamp => {
    const date = new Date(timeStamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
  };

  return (
    <div className="refresh">
      <span className="refresh__text">
        Last updated at: {timeFromTimeStamp(timestamp)}
        <button className="refreshBtn" onClick={() => fetchWeather()}>
          Refresh
        </button>
      </span>
    </div>
  );
};

Refresh.propTypes = {
  timestamp: PropTypes.number.isRequired,
  fetchWeather: PropTypes.func.isRequired
};

export default Refresh;
