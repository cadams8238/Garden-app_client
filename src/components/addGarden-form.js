import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { addGarden, hideAddGardenForm } from '../actions/userGardens';
import ActionButton from './actionButton';
import Input from './form-input';
import { required, notEmpty } from '../validators';


export class AddGardenForm extends React.Component {

    hideForm() {
        this.props.dispatch(hideAddGardenForm());
    }

    addNew(values) {
        // console.log(values)
        this.props.dispatch(addGarden(values))
    }

    render() {
        return (
            <form
                className="add-form"
                // onSubmit={this.props.handleSubmit(values =>
                //     this.onSubmit(values)
                // )}
            >
                <fieldset>
                    <legend
                        className="add-new-title"
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
                        id="location"
                        name="location"
                        label="Location:"
                        component={Input}
                        validate={[required, notEmpty]}
                    />
                    <Field
                        id="description"
                        name="description"
                        label="Description:"
                        component={Input}
                        validate={[required, notEmpty]}
                    />

                    <ActionButton
                        label="Save"
                        whenClicked=
                            {this.props.handleSubmit(values =>
                                this.addNew(values)
                            )}
                    />
                    <ActionButton
                        label="Close"
                        whenClicked={() => this.hideForm()}
                    />
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'add-garden'
})(AddGardenForm)
