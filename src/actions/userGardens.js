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
