import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';

export const FETCH_ONE_GARDEN_REQUEST = 'FETCH_ONE_GARDEN_REQUEST';
export const fetchOneGardensRequest = () => ({
    type: FETCH_ONE_GARDEN_REQUEST
})

export const FETCH_ONE_GARDEN_SUCCESS = 'FETCH_ONE_GARDEN_SUCCESS';
export const fetchOneGardensSuccess = garden => ({
    type: FETCH_ONE_GARDEN_SUCCESS,
    garden
})

export const FETCH_ONE_GARDEN_ERROR = 'FETCH_ONE_GARDEN_ERROR';
export const fetchOneGardensError = error => ({
    type: FETCH_ONE_GARDEN_ERROR,
    error
})


export const getOneGardenData = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    dispatch(fetchOneGardenRequest());
    return (
        fetch(`${API_BASE_URL}/garden/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchOneGardenSuccess(data)))
        .catch(err => dispatch(fetchOneGardenError(err)))
    );
}
