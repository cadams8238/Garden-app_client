import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import FormLandingPage from './components/form-landingPage';
// import Test from './components/test';
import DashboardTemplate from './components/dashboard-template';


export default class App extends Component {
  render() {
    return(
        <div>
            <Route path="/auth" component={FormLandingPage} />
            <Route path="/dashboard" component={DashboardTemplate} />
            {/* <Test /> */}
        </div>
    );
  }
}
