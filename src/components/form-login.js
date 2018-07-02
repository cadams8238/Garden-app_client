import React from 'react';
import ActionButton from './actionButton';
import Input from './form-input';
import './styles/form-login.css';

export default function Form_signUp() {

    return (
        <form className="form">
            <fieldset>
                <legend>Login</legend>
                <Input id="username" label="Username:"/>
                <Input id="password" label="Password:" />

                <ActionButton label="Submit"/>
            </fieldset>
        </form>
    );
}
