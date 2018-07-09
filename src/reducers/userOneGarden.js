import {
    FETCH_ONE_GARDEN_REQUEST,
    FETCH_ONE_GARDEN_SUCCESS,
    FETCH_ONE_GARDEN_ERROR
} from '../actions/userOneGarden';


const initialState = {
    garden: {},
    loading: false,
    error: null
}

const fetchOneGarden = (state = initialState, action) => {
    if(action.type === FETCH_ONE_GARDEN_REQUEST) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    else if(action.type === FETCH_ONE_GARDEN_SUCCESS) {
        return {
            ...state,
            garden: action.garden,
            loading: false
        };
    }
    else if(action.type === FETCH_ONE_GARDEN_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }
    return state;
}

export default fetchOneGarden;
