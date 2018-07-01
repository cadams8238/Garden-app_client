import React from 'react';
import './styles/actionButton.css';

export default function ActionButton(props) {
    return (
        <button
            className="call-to-action-button"
            onClick={props.whenClicked}
        >
            {props.label}
        </button>
    );
};
