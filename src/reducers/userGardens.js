import {
    FETCH_GARDENS_REQUEST,
    FETCH_GARDENS_SUCCESS,
    FETCH_GARDENS_ERROR,
    SHOW_ADD_GARDEN_FORM,
    HIDE_ADD_GARDEN_FORM
} from '../actions/userGardens';

const initialState = {
    data: [],
    adding: false,
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
    else if (action.type === SHOW_ADD_GARDEN_FORM) {
        return ({
            ...state,
            adding: true
        });
    }
    else if (action.type === HIDE_ADD_GARDEN_FORM) {
        return ({
            ...state,
            adding: false
        });
    }
    return state;
}


export default fetchUserGardens;
