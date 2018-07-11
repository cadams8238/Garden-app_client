import {
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR
} from '../actions/weatherData';

const initialState = {
    needsWatering: null,
    loading: false,
    error: null
}

const weatherDataReducer = (state = initialState, action) => {
    if(action.type === FETCH_WEATHER_DATA_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === FETCH_WEATHER_DATA_SUCCESS) {
        return {
            ...state,
            loading: false,
            needsWatering: action.needsWatering
        }
    }
    else if(action.type === FETCH_WEATHER_DATA_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err
        }
    }
    return state;
}

export default weatherDataReducer;
