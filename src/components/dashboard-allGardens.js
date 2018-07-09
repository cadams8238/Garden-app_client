import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteGardenFromDB, getGardensData, showAddGardenForm } from '../actions/userGardens';
import ActionButton from './actionButton';
// import GardenListView from './condensedGarden-listView';
import AddGardenForm from './addGarden-form';

import './styles/dashboard-allGardens.css';
import button from './styles/Buttons.module.css';
import dashboard from './styles/Dashboards.module.css';
import typography from './styles/Typography.module.css';

export class AllGardensDashboard extends React.Component {
    deleteGarden(id) {
        // console.log(id)
        this.props.dispatch(deleteGardenFromDB(id));
        this.props.dispatch(getGardensData());
    }

    showAddForm() {
        this.props.dispatch(showAddGardenForm());
    }

    render() {
        const gardens = this.props.data.map((garden, index) => (
            <li className={dashboard.condensedGarden} key={index}>
                <h3>
                    <Link to={`/dashboard/oneGarden/${garden.id}`}>
                        {garden.name}
                    </Link>
                </h3>
                {/* <p className="description">{garden.description}</p> */}
                <p className="description">{garden.location}</p>

                <button
                    className={button.delete}
                    onClick={() => this.deleteGarden(garden.id)}
                >
                    Delete
                </button>
            </li>
        ));

        return (
            <div className={dashboard.mainContent}>
                <section>
                    <h2 className={typography.heading}>My Gardens</h2>
                    {!this.props.adding ?
                        <ActionButton
                            label="+ New"
                            whenClicked={() => this.showAddForm()}
                        /> : <AddGardenForm />
                    }

                </section>
                <ul className={dashboard.gardensListView}>
                    {gardens}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    data: state.gardens.data,
    adding: state.gardens.adding
})

export default connect(mapStateToProps)(AllGardensDashboard)
