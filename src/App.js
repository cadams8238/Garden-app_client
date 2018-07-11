import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FormLandingPage from './components/form-landingPage';
import DashboardTemplate from './components/dashboard-template';
import Home from './components/home-landingPage';


export default class App extends Component {
  render() {
    return(
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={FormLandingPage} />
            <Route path="/dashboard" component={DashboardTemplate} />
        </React.Fragment>
    );
  }
}
