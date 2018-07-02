import React, { Component } from 'react';
import Form_login from './components/form-login';
// import ActionButton from './components/actionButton';

export default class App extends Component {
  render() {
    return(
        <div>
            <Form_login />
            {/* <ActionButton label="Sign up"/> */}
        </div>
    );
  }
}
