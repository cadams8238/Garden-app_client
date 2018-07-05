import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
    console.log(JSON.stringify(user));
    return fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            console.log(res)
            normalizeResponseErrors(res)
        })
        .then(res => {
            // console.log(res.json())
            return res.json()
        }
        )
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
