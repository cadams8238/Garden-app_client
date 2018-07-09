import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Form_signUp from './form-signUp';
import Form_login from './form-login';
import './styles/form-landingPage.css';


export function FormLandingPage(props) {

    if(props.loggedIn) {
        return (
            <Redirect to="/dashboard/allGardens" />
        );
    }

    return (
        <div>
            <header>
                <h1 className="form-logo">Phytochor</h1>
            </header>
            <main>
                <Route exact path="/auth/signUp" component={Form_signUp} />
                <Route exact path="/auth/login" component={Form_login} />
            </main>
        </div>
    )

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(FormLandingPage);
