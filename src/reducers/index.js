import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherDataReducer from './weatherDataReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
    weather: weatherDataReducer,
    form: formReducer,
    auth: authReducer
})

export default rootReducer;
