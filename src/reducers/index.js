import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherDataReducer from './weatherDataReducer';
import authReducer from './auth';
import gardenReducer from './gardens';

const rootReducer = combineReducers({
    weather: weatherDataReducer,
    form: formReducer,
    auth: authReducer,
    gardens: gardenReducer
})

export default rootReducer;
