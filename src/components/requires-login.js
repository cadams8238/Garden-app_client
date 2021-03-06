import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default () => Component => {
    function RequiresLogin(props) {
        const {
            authenticating,
            loggedIn,
            error,
            ...passThroughProps
        } = props;

        if(authenticating) {
            return <div>Logging in...</div>;
        }
        else if(!loggedIn) {
            return <Redirect to="/auth/login" />;
        }

        return <Component {...passThroughProps} />;
    }

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUser !== null,
    });

    return connect(mapStateToProps)(RequiresLogin);
}
