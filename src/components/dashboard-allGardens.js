import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteGardenFromDB, getGardensData, showAddGardenForm } from '../actions/userGardens';
import ActionButton from './actionButton';
import GardenListView from './condensedGarden-listView';
import AddGardenForm from './addGarden-form';
import './styles/dashboard-allGardens.css';

export class AllGardensDashboard extends React.Component {
    deleteGarden(id) {
        console.log(id)
        this.props.dispatch(deleteGardenFromDB(id));
        this.props.dispatch(getGardensData());
    }

    showAddForm() {
        this.props.dispatch(showAddGardenForm());
    }

    render() {
        const gardens = this.props.data.map((garden, index) => (
            <li className="condensedGarden" key={index}>
                <h3><a href={`/garden/${garden.id}`}>{garden.name}</a></h3>
                <p className="description">{garden.description}</p>
                <button onClick={() => this.deleteGarden(garden.id)}>Delete</button>
            </li>
        ));

        return (
            <div className="all-gardens-content">
                <section>
                    <h2 className="title">My Gardens</h2>
                    {!this.props.adding ?
                        <ActionButton
                            label="+ New"
                            whenClicked={() => this.showAddForm()}
                        /> : <AddGardenForm />
                    }

                </section>
                <ul className="gardens-list-view">
                    {gardens}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state, props) => ({
    data: state.gardens.data,
    adding: state.gardens.adding
})

export default connect(mapStateToProps)(AllGardensDashboard)
