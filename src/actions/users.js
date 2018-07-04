import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => {
    return dispatch(
        fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }))
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if(reason === 'VaildationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
