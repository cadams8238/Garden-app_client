import React from 'react';
import './styles/form-input.css'

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if(!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if(this.props.meta.touched && this.props.meta.error) {
            error = (
                <div>{this.props.meta.error}</div>
            )
        }

        let warning;
        if(this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div>{this.props.meta.warning}</div>
            )
        }

        const element = this.props.element || "text";

        return (
            <label
                htmlFor={this.props.id}
                className="form-label"
            >
                {this.props.label}
                {error}
                {warning}
                <input
                    className="form-input"
                    {...this.props.input}
                    type={element}
                    name={this.props.id}
                    id={this.props.id}
                    ref={input => this.input = input}
                ></input>
            </label>
        );
    }

}
