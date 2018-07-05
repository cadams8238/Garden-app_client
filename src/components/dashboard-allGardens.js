import React from 'react';
import { Link } from 'react-router-dom';

import ActionButton from './actionButton';
import GardenListView from './condensedGarden-listView';
import './styles/dashboard-allGardens.css';

export default function AllGardensDashboard() {
    return (
        <div className="all-gardens-content">
            <section>
                <h2 className="title">My Gardens</h2>
                <ActionButton label="+ New"/>
            </section>
            <ul className="gardens-list-view">
                <Link to="/oneGarden">
                    <GardenListView />
                </Link>
                <Link to="/oneGarden">
                    <GardenListView />
                </Link>
                <Link to="/oneGarden">
                    <GardenListView />
                </Link>
            </ul>
        </div>
    );
}
