import React from 'react';
import styles from './styles/Buttons.module.css';

export default function ActionButton(props) {
    const className = props.className;
    
    return (
        <button
            type="submit"
            className={[styles.button, styles[className]].join(' ')}
            onClick={props.whenClicked}
        >
            {props.label}
        </button>
    );
};
