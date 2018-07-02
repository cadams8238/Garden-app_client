import React, { Component } from 'react';
import DashboardTemplate from './components/dashboard-template';
// import ActionButton from './components/actionButton';

export default class App extends Component {
  render() {
    return(
        <div>
            <DashboardTemplate />
            {/* <ActionButton label="Sign up"/> */}
        </div>
    );
  }
}
