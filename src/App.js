import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentCity, setCurrentLatLng, setWeather } from './store/actions';
import { getCurrentCity } from './services/location';
import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import FatalError from './components/FatalError/FatalError';
import './App.css';

const App = ({
  currentCity,
  currentLatLng,
  weather,
  setCurrentLatLng,
  setCurrentCity,
  setWeather
}) => {
  const [fatalError, setFatalError] = useState(false);
  const [noGeoLocatiob, setNoGeolocation] = useState(false);

  useEffect(async () => {
    if (!currentLatLng) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            const { latitude, longitude } = pos.coords;
            setCurrentLatLng(`${latitude},${longitude}`);
          },
          err => {
            setNoGeolocation(true);
            console.error(err);
          },
          { timeout: 20000 }
        );
      }
    }
  }, []);

  useEffect(async () => {
    if (currentLatLng && !currentCity) {
      try {
        const city = await getCurrentCity(currentLatLng);
        setCurrentCity(city);
      } catch (error) {
        setFatalError(true);
        console.error(error);
      }
    }
  }, [currentLatLng]);

  if (noGeoLocatiob)
    return (
      <div className="wrapper">
        <FatalError
          heading="Geolocation is not enabled."
          description="Please allow location access."
        />
      </div>
    );
  if (fatalError)
    return (
      <div className="wrapper">
        <FatalError
          heading="It's not you, its us."
          description="Something went wrong while displaying the web page"
        />
      </div>
    );
  if (!currentLatLng || !currentCity)
    return (
      <div className="wrapper">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="wrapper">
      <Weather
        currentCity={currentCity}
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentCity: state.currentCity,
  weather: state.weather,
  currentLatLng: state.currentLatLng
});

const mapDispatchToProps = dispatch => ({
  setCurrentCity: city => dispatch(setCurrentCity(city)),
  setCurrentLatLng: latLng => dispatch(setCurrentLatLng(latLng)),
  setWeather: weather => dispatch(setWeather(weather))
});

App.propTypes = {
  currentCity: PropTypes.string,
  currentLatLng: PropTypes.string,
  weather: PropTypes.object,
  setCurrentLatLng: PropTypes.func,
  setCurrentCity: PropTypes.func,
  setWeather: PropTypes.func
};

App.defaultProps = {
  currentCity: undefined,
  currentLatLng: undefined,
  weather: undefined,
  setCurrentLatLng: undefined,
  setCurrentCity: undefined,
  setWeather: undefined
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
