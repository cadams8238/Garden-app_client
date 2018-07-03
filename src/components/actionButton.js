import React from 'react';
import './styles/actionButton.css';

export default function ActionButton(props) {
    return (
        <button
            type="submit"
            className="call-to-action-button"
        >
            {props.label}
        </button>
    );
};
