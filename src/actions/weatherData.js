import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';


export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST';
const fetchWeatherDataRequest = () => ({
    type: FETCH_WEATHER_DATA_REQUEST
})

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = needsWatering => ({
    type: FETCH_WEATHER_DATA_SUCCESS,
    needsWatering
})

export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';
const fetchWeatherDataError = error => ({
    type: FETCH_WEATHER_DATA_ERROR,
    error
})


const isRaining = (data, dispatch) => {
    const jsonKeys = Object.keys(data);
    const rain = jsonKeys.filter(key => key === 'rain');
    return rain.length === 0 ?
        dispatch(fetchWeatherDataSuccess(true)) :
        dispatch(fetchWeatherDataSuccess(false));
}

export const fetchWeatherData = (zipcode) => dispatch => {
    dispatch(fetchWeatherDataRequest)
    return (
        fetch(`${API_BASE_URL}/weatherData/${zipcode}`)
            .then(response => normalizeResponseErrors(response))
            .then(res => res.json())
            .then(jsonData => isRaining(jsonData, dispatch))
            .catch(err => dispatch(fetchWeatherDataError(err)))
    );
}
