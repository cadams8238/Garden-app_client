import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionButton from './actionButton';
import GardenListView from './condensedGarden-listView';
import './styles/dashboard-allGardens.css';

export function AllGardensDashboard(props) {
    const gardens = props.data.map((garden, index) => (
        <li key={index}>
            <h3>{garden.name}</h3>
            <p className="description">
                {garden.description ? garden.description : garden.location}
            </p>
        </li>
    ))
    console.log(props.data)
    console.log(gardens)

    return (
        <div className="all-gardens-content">
            <section>
                <h2 className="title">My Gardens</h2>
                <ActionButton label="+ New"/>
            </section>
            <ul className="gardens-list-view">
                {gardens}

                {/* <Link to="/oneGarden">
                    <GardenListView />
                </Link>
                <Link to="/oneGarden">
                    <GardenListView />
                </Link>
                <Link to="/oneGarden">
                    <GardenListView />
                </Link> */}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    data: state.gardens.data
})

export default connect(mapStateToProps)(AllGardensDashboard)
