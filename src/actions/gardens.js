import { API_BASE_URL } from '..config';
import { normalizeResponseErrors } from './utils';

export const GARDENS_REQUEST = 'GARDENS_REQUEST';
export const gardensRequest = () => {
    type: GARDENS_REQUEST
}

export const GARDENS_SUCCESS = 'GARDENS_SUCCESS';
export const gardensSuccess = data => {
    type: GARDENS_SUCCESS,
    data
}

export const GARDENS_ERROR = 'GARDENS_ERROR';
export const gardensError = error => {
    type: GARDENS_ERROR,
    error
}


export const getGardensData = (username) => dispatch => {
    dispatch(gardensRequest());
    return (
        fetch(`${API_BASE_URL}/gardens/${username}`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(gardensSuccess(data)))
        .catch(err => dispatch(gardensError(err)));
    );
}
