import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { addGarden, hideAddGardenForm, getGardensData } from '../actions/userGardens';
import { required, notEmpty, isFiveDigits } from '../validators';
import ActionButton from './actionButton';
import Input from './form-input';

import form from './styles/Forms.module.css';


export class AddGardenForm extends React.Component {
    hideForm() {
        this.props.dispatch(hideAddGardenForm());
    }

    addNew(values) {
        this.props.dispatch(addGarden(values));
        this.hideForm();
        this.props.dispatch(getGardensData())
    }

    render() {
        return (
            <form
                className={form.addForm}
            >
                <fieldset>
                    <legend
                        className={form.addNewTitle}
                    >
                        Add New Garden
                    </legend>
                    <Field
                        id="name"
                        name="name"
                        label="Name:"
                        component={Input}
                        validate={[required, notEmpty]}
                    />

                    <Field
                        id="description"
                        name="description"
                        label="Description:"
                        component={Input}
                    />

                    <Field
                        id="location"
                        name="location"
                        label="Location:"
                        component={Input}
                        validate={[required, notEmpty]}
                    />

                    <Field
                        id="zipcode"
                        name="zipcode"
                        label="Zip Code:"
                        component={Input}
                        validate={[required, notEmpty, isFiveDigits]}
                        element="number"
                    />

                    <div className={form.addNewButtons}>
                        <ActionButton
                            label="Save"
                            whenClicked=
                                {this.props.handleSubmit(values =>
                                    this.addNew(values)
                                )}
                            className="addNewForm"
                        />

                        <ActionButton
                            label="Close"
                            whenClicked={() => this.hideForm()}
                            className="addNewForm"
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'add-garden'
})(AddGardenForm)
