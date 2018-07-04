import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import ActionButton from './actionButton';
import Input from './form-input';
import './styles/form-signUp.css';

export class Form_signUp extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        // console.log(this.props.handleSubmit)
        return (
            <form
                className="form"
                onSubmit={this.props.handleSubmit(values => {
                    console.log(values);
                    this.onSubmit(values);
                })}
            >
                <fieldset>
                    <legend>Sign up</legend>
                    <Field
                        id="username"
                        name="username"
                        label="Username:"
                        component={Input}
                    />
                    <Field
                        id="email"
                        name="email"
                        label="Email:"
                        component={Input}
                    />
                    <Field
                        id="password"
                        name="password"
                        label="Password:"
                        component={Input}
                        element="password"

                    />
                    <Field
                        id="confirm-password"
                        name="confirm-password"
                        label="Confirm Password:"
                        component={Input}
                        element="password"

                    />

                    <ActionButton label="Submit"/>

                    <p>
                        <Link to="/login">
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
