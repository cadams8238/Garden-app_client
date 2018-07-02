import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';


export const FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST';
const fetchWeatherDataRequest = () => {
    type: FETCH_WEATHER_DATA_REQUEST
}

export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const fetchWeatherDataSuccess = data => {
    type: FETCH_WEATHER_DATA_SUCCESS,
    data
}

export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';
const fetchWeatherDataError = error => {
    type: FETCH_WEATHER_DATA_ERROR,
    error
}


export const fetchWeatherData = () => dispatch => {
    dispatch(fetchWeatherDataRequest)
    return (
        fetch(`${API_BASE_URL}/weatherData`)
            .then(response => normalizeResponseErrors(response))
            .then(res => res.json())
            .then(jsonData => dispatch(fetchWeatherDataSuccess(jsonData)))
            .catch(err => dispatch(fetchWeatherDataError(err)))
    );
}
