/* eslint-disable*/
import axios from 'axios';

export const getCurrentCity = async latLng => {
  const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_KEY}`;
  const url = `${baseUrl}&latlng=${latLng}`;
  try {
    const { data } = await axios.get(url);
    const currentCompountCode =
      data &&
      data.results[0].address_components.filter(item => {
        if (item.types && item.types.includes('locality')) return item;
      });

    return (
      currentCompountCode &&
      currentCompountCode[0] &&
      currentCompountCode[0].long_name
    );
  } catch (error) {
    throw error;
  }
};
