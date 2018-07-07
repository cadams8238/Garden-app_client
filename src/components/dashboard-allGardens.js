import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionButton from './actionButton';
import GardenListView from './condensedGarden-listView';
import './styles/dashboard-allGardens.css';

export class AllGardensDashboard extends React.Component {
    
    deleteGarden(id) {
        console.log(id);
        // props.dispatch( deleteGardenFromDB )
    }

    render() {
        const gardens = this.props.data.map((garden, index) => (
            <GardenListView
                key={index}
                id={garden.id}
                name={garden.name}
                description={garden.description ?
                    garden.description : garden.location}
                whenClicked={id => this.deleteGarden(id)}
            />
        ));

        return (
            <div className="all-gardens-content">
                <section>
                    <h2 className="title">My Gardens</h2>
                    <ActionButton label="+ New"/>
                </section>
                <ul className="gardens-list-view">
                    {gardens}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state, props) => ({
    data: state.gardens.data
})

export default connect(mapStateToProps)(AllGardensDashboard)
