import React from 'react';
import PropTypes from 'prop-types';
import ErrorImg from '../../assets/error.svg';
import './FatalError.css';

const FatalError = ({ heading, description }) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="fatalError">
      <h3>{heading}</h3>
      <p>{description}</p>
      <button className="reloadBtn" onClick={handleReload}>
        Reload
      </button>
      <div className="imageHolder">
        <img src={ErrorImg} alt="internal server error" />
      </div>
    </div>
  );
};

FatalError.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default FatalError;
