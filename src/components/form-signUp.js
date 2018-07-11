import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { required, notEmpty, isSixCharLong, lessThanSeventyTwoChar, isTrimmed } from '../validators';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';

import ActionButton from './actionButton';
import Input from './form-input';

import form from './styles/Forms.module.css';


export class Form_signUp extends React.Component {
    onSubmit(values) {
        const { username, password } = values;
        const user = {username, password};
        // console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className={form.form}
                onSubmit={this.props.handleSubmit(values => {
                    return this.onSubmit(values);
                })}
            >
                <fieldset>
                    <legend>Sign up</legend>
                    <Field
                        id="username"
                        name="username"
                        label="Username:"
                        component={Input}
                        validate={[required, notEmpty, isTrimmed]}
                    />
                    {/* <Field
                        id="email"
                        name="email"
                        label="Email:"
                        component={Input}
                        validate={[required, notEmpty]}
                    /> */}
                    <Field
                        id="password"
                        name="password"
                        label="Password:"
                        component={Input}
                        element="password"
                        validate={[required, notEmpty, isSixCharLong, lessThanSeventyTwoChar, isTrimmed]}
                    />
                    {/* <Field
                        id="confirm-password"
                        name="confirm-password"
                        label="Confirm Password:"
                        component={Input}
                        element="password"
                        validate={[required, notEmpty, isSixCharLong, lessThanSeventyTwoChar, isTrimmed]}
                    /> */}

                    <ActionButton label="Submit"/>

                    <p>
                        <Link to="/auth/login" className={form.link}>
                            Already registered? Login here
                        </Link>
                    </p>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'sign-up'
})(Form_signUp);
