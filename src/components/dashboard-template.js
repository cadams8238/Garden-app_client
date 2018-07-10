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
            <div>
                <Header />
                <section>
                    <Route exact path="/dashboard/allGardens" component={AllGardensDashboard} />
                    <Route path="/dashboard/oneGarden/:id" component={OneGardenDashboard} />
                </section>
                <img></img>
            </div>
        );
    }
}

export default requiresLogin()(connect()(DashboardTemplate));
