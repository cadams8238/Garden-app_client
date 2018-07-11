import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherDataReducer from './weatherDataReducer';
import authReducer from './auth';
import gardenReducer from './userGardens';
import oneGardenReducer from './userOneGarden';


const rootReducer = combineReducers({
    weather: weatherDataReducer,
    form: formReducer,
    auth: authReducer,
    gardens: gardenReducer,
    oneGarden: oneGardenReducer
})

export default rootReducer;
