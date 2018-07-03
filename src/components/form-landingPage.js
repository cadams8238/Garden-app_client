import React from 'react';
import Form_signUp from './form-signUp';
import Form_login from './form-login';
import './styles/form-landingPage.css';

export default function Form() {
    return (
        <div>
            <h1 className="logo">Phytochor</h1>
            {/* <img />
            <img /> */}

            {/* <Form_login /> */}
            <Form_signUp />
        </div>
    );
}
