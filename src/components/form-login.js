import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { login } from '../actions/auth';
import { required, notEmpty, isSixCharLong, lessThanSeventyTwoChar, isTrimmed } from '../validators';

import ActionButton from './actionButton';
import Input from './form-input';
import form from './styles/Forms.module.css';

export class Form_login extends React.Component {
    onSubmit(values) {
        const { username, password } = values;
        return this.props.dispatch(login(username, password));
    }

    render() {
        return (
            <form
                className={form.form}
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
            >
                <fieldset>
                    <legend>Login</legend>
                    <Field
                        id="username"
                        name="username"
                        label="Username:"
                        component={Input}
                        validate={[required, notEmpty, isTrimmed]}
                    />
                    <Field
                        id="password"
                        name="password"
                        label="Password:"
                        component={Input}
                        validate={[required, notEmpty, isSixCharLong, lessThanSeventyTwoChar, isTrimmed]}
                        element="password"
                    />

                    <ActionButton label="Submit"/>

                    <p>
                        <Link to="/auth/signUp">
                            Haven't registered? Sign up here
                        </Link>
                    </p>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(Form_login)
