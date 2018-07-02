import React from 'react';
import ActionButton from './actionButton';
import Input from './form-input';
import './styles/form-signUp.css';

export default function Form_signUp() {

    return (
        <form className="form">
            <fieldset>
                <legend>Sign up</legend>
                <Input id="username" label="Username:"/>
                <Input id="email" label="Email:" />
                <Input id="password" label="Password:" />
                <Input id="confirm-password" label="Confirm Password:" />

                <ActionButton label="Submit"/>
            </fieldset>
        </form>
    );
}
