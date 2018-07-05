import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Route } from 'react-router-dom';
import requiresLogin from './requires-login';

import Header from './dashboard-header';
import AllGardensDashboard from './dashboard-allGardens';
import OneGardenDashboard from './dashboard-oneGarden';
import Footer from './dashboard-footer';
import './styles/dashboard-template.css';

export function DashboardTemplate(props) {

    return (
        <div>
            <Header />
            <section>
                <Route exact path="/allGardens" component={AllGardensDashboard} />
                <Route exact path="/oneGarden" component={OneGardenDashboard} />
            </section>
            <Footer />
        </div>
    );
}


export default requiresLogin()(DashboardTemplate);
