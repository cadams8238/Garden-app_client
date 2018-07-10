import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import FormLandingPage from './components/form-landingPage';
import DashboardTemplate from './components/dashboard-template';
import Home from './components/app-landingPage';

export default class App extends Component {
  render() {
    return(
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={FormLandingPage} />
            <Route path="/dashboard" component={DashboardTemplate} />
        </div>
    );
  }
}
