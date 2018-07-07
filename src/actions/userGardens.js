import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';

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


export const getGardensData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);

    dispatch(fetchUserGardensRequest());
    return (
        fetch(`${API_BASE_URL}/gardens`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            console.log(res)
            normalizeResponseErrors(res)
        })
        .then(res => res.json())
        .then(data => dispatch(fetchUserGardensSuccess(data)))
        .catch(err => dispatch(fetchUserGardensError(err)))
    );
}
