import React from 'react';

export default function Input(props) {
    return (
        <label for={props.id}>
            {props.label}
            <input type="text" name={props.id} id={props.id}></input>
        </label>
    );
}
