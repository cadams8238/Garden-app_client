import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';

import Form_signUp from './form-signUp';
import Form_login from './form-login';

import logo from './styles/Logo.module.css';
import form from './styles/Forms.module.css';


export function FormLandingPage(props) {
    if(props.loggedIn) {
        return (
            <Redirect to="/dashboard/allGardens" />
        );
    }

    return (
        <div className={form.bkgrdImg}>
            <header role="banner">
                <Link to="/" className={logo.linkToHomePage}>
                    <h1 className={logo.formLogo}>Phytochor</h1>
                </Link>
            </header>
            <Route exact path="/auth/signUp" component={Form_signUp} />
            <Route exact path="/auth/login" component={Form_login} />
        </div>
    )

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(FormLandingPage);
