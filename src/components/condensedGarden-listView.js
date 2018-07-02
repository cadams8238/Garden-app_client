import React from 'react';
import './styles/condensedGarden-listView.css';

export default function GardenListView() {
    return (
        <React.Fragment>
            <li className="condensedGarden">
                <h3>Home Garden</h3>
                <p className="description">Description</p>
            </li>
        </React.Fragment>
    );
}
