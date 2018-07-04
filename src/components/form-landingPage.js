import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form_signUp from './form-signUp';
import Form_login from './form-login';
import './styles/form-landingPage.css';

export default function Form() {
    return (
        <Router>
            <div>
                <header>
                    {/* add link here to landing page when completed */}
                    <h1 className="logo">Phytochor</h1>
                </header>
                <main>
                    {/* <img />
                    <img /> */}

                    {/* <Form_login /> */}
                    {/* <Form_signUp /> */}
                    <Route exact path="/signUp" component={Form_signUp} />
                    <Route exact path="/login" component={Form_login} />
                </main>
            </div>
        </Router>
    );
}
