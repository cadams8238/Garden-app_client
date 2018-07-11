import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import requiresLogin from './requires-login';
import { getGardensData } from '../actions/userGardens';
import Header from './dashboard-header';
import AllGardensDashboard from './dashboard-allGardens';
import OneGardenDashboard from './dashboard-oneGarden';


export class DashboardTemplate extends React.Component {
    componentDidMount() {
        this.props.dispatch(getGardensData());
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Route exact path="/dashboard/allGardens" component={AllGardensDashboard} />
                <Route path="/dashboard/oneGarden/:id" component={OneGardenDashboard} />
                <img
                    src=""
                    alt="Fruit and veggie illustrations"
                />
            </React.Fragment>
        );
    }
}

export default requiresLogin()(connect()(DashboardTemplate));
