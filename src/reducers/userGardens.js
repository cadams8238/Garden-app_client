import {
    FETCH_GARDENS_REQUEST,
    FETCH_GARDENS_SUCCESS,
    FETCH_GARDENS_ERROR
} from '../actions/userGardens';

const initialState = {
    data: [],
    error: null,
    loading: false
}

const fetchUserGardens = (state = initialState, action) => {
    if(action.type === FETCH_GARDENS_REQUEST) {
        return ({
            ...state,
            loading: true,
            error: null
        });
    }
    else if(action.type === FETCH_GARDENS_SUCCESS) {
        return ({
            ...state,
            loading: false,
            data: action.data
        });
    }
    else if(action.type === FETCH_GARDENS_ERROR) {
        return ({
            ...state,
            loading: false,
            error: action.error
        });
    }
    return state;
}


export default fetchUserGardens;
