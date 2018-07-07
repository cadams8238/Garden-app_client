//called in store.js
export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

//called in actions/auth.js
export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

//called in actions/auth.js
export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};
