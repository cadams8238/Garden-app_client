import React from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import requiresLogin from './requires-login';

import Header from './dashboard-header';
import AllGardensDashboard from './dashboard-allGardens';
import OneGardenDashboard from './dashboard-oneGarden';
import Footer from './dashboard-footer';
import './styles/dashboard-template.css';

export class DashboardTemplate extends React.Component {

    componentDidMount() {
        // this.props.dispatch( fetchDataFromBackEnd )
    }

    render() {
        return (
            <div>
                <Header />
                <section>
                    {/* <Switch> */}
                        <Route exact path="/dashboard/allGardens" component={AllGardensDashboard} />
                        <Route exact path="/dashboard/oneGarden" component={OneGardenDashboard} />
                    {/* </Switch> */}
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // const {currentUser} = state.auth;
    return {
        data: state.gardens.data,
        username: state.auth.currentUser.username
    }
}

// requiresLogin()(connect(mapStateToProps)(DashboardTemplate));
export default requiresLogin()(DashboardTemplate);
