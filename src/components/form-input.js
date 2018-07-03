import React from 'react';
import './styles/form-input.css'

export default class Input extends React.Component {

    render() {
        const element = this.props.element || "text";

        return (
            <label htmlFor={this.props.id}>
                {this.props.label}
                <input
                    {...this.props.input}
                    type={element}
                    name={this.props.id}
                    id={this.props.id}
                ></input>
            </label>
        );
    }

}
