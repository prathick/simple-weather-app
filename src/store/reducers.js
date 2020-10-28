import { types } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CITY: {
            const currentCity = action.payload;
            return { ...state, currentCity }
        }
        case types.SET_WEATHER_REPORT: {
            const weather = action.payload;
            return { ...state, weather: weather }
        }
        case types.SET_CURRENT_LATLNG: {
            const currentLatLng = action.payload;
            return { ...state,  currentLatLng}
        }

        default:
            return state
    }
}

export default reducer