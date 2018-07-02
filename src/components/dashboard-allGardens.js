import React from 'react';
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
                <GardenListView />
                <GardenListView />
                <GardenListView />
            </ul>
        </div>
    );
}
