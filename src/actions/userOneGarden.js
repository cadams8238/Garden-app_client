import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';


export const FETCH_ONE_GARDEN_REQUEST = 'FETCH_ONE_GARDEN_REQUEST';
export const fetchOneGardenRequest = () => ({
    type: FETCH_ONE_GARDEN_REQUEST
})

export const FETCH_ONE_GARDEN_SUCCESS = 'FETCH_ONE_GARDEN_SUCCESS';
export const fetchOneGardenSuccess = garden => ({
    type: FETCH_ONE_GARDEN_SUCCESS,
    garden
})

export const FETCH_ONE_GARDEN_ERROR = 'FETCH_ONE_GARDEN_ERROR';
export const fetchOneGardenError = error => ({
    type: FETCH_ONE_GARDEN_ERROR,
    error
})


export const fetchOneGardenData = (id) => (dispatch, getState) => {
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
        .then(data => {
            dispatch(fetchOneGardenSuccess(data))
            return data;
        })
        .catch(err => dispatch(fetchOneGardenError(err)))
    );
}
