import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';


export const FETCH_GARDENS_REQUEST = 'FETCH_GARDENS_REQUEST';
export const fetchUserGardensRequest = () => ({
    type: FETCH_GARDENS_REQUEST
})

export const FETCH_GARDENS_SUCCESS = 'FETCH_GARDENS_SUCCESS';
export const fetchUserGardensSuccess = data => ({
    type: FETCH_GARDENS_SUCCESS,
    data
})

export const FETCH_GARDENS_ERROR = 'FETCH_GARDENS_ERROR';
export const fetchUserGardensError = error => ({
    type: FETCH_GARDENS_ERROR,
    error
})

export const DELETE_GARDEN = 'DELETE_GARDEN';
export const deleteGarden = id => ({
    type: DELETE_GARDEN,
    id
})

export const SHOW_ADD_GARDEN_FORM = 'SHOW_ADD_GARDEN_FORM';
export const showAddGardenForm = () => ({
    type: SHOW_ADD_GARDEN_FORM
})

export const HIDE_ADD_GARDEN_FORM = 'HIDE_ADD_GARDEN_FORM';
export const hideAddGardenForm = () => ({
    type: HIDE_ADD_GARDEN_FORM
})

export const ADD_GARDEN_REQUEST = 'ADD_GARDEN_REQUEST';
export const addGardenRequest = () => ({
    type: ADD_GARDEN_REQUEST
})

export const ADD_GARDEN_SUCCESS = 'ADD_GARDEN_SUCCESS';
export const addGardenSuccess = () => ({
    type: ADD_GARDEN_SUCCESS
})

export const ADD_GARDEN_ERROR = 'ADD_GARDEN_ERROR'
export const addGardenError = error => ({
    type: ADD_GARDEN_ERROR,
    error
})


export const getGardensData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    dispatch(fetchUserGardensRequest());
    return (
        fetch(`${API_BASE_URL}/garden`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchUserGardensSuccess(data)))
        .catch(err => dispatch(fetchUserGardensError(err)))
    );
}

export const deleteGardenFromDB = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return (
        fetch(`${API_BASE_URL}/garden/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .catch(err => {
            const message = "Something went wrong";
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            )
        })
    )
}

export const addGarden = gardenInfo => (dispatch, getState) => {
    console.log(JSON.stringify(gardenInfo));
    const authToken = getState().auth.authToken;

    return (
        fetch(`${API_BASE_URL}/garden`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gardenInfo)
        })
        .then(res => {
            console.log(res)
            normalizeResponseErrors(res)
        })
        .then(res => res.json())
        .then(() => dispatch(addGardenSuccess()))
        .catch(err => dispatch(addGardenError(err)))
    );
}
