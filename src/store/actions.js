export const types = {
  SET_CURRENT_CITY: 'SET_CURRENT_CITY',
  SET_WEATHER_REPORT: 'SET_WEATHER_REPORT',
  SET_CURRENT_LATLNG: 'SET_CURRENT_LATLNG'
};

export const setCurrentCity = city => ({
  type: types.SET_CURRENT_CITY,
  payload: city
});

export const setWeather = weather => ({
  type: types.SET_WEATHER_REPORT,
  payload: weather
});

export const setCurrentLatLng = latLng => ({
  type: types.SET_CURRENT_LATLNG,
  payload: latLng
});
