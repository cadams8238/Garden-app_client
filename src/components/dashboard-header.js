import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearAuth } from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import styles from './styles/Buttons.module.css';
import logo from './styles/Logo.module.css';
import dashboard from './styles/Dashboards.module.css';

export function Header(props) {
    const logOut = () => {
        props.dispatch(clearAuth());
        clearAuthToken();
    }

    return (
        <div role="navigation" aria-label="Dashboard menu"
            className={dashboard.navbar}
        >
            <Link to="/"
                className={logo.linkToHomePage}
                aria-label="Home page"
            >
                <h1 className={logo.dashboardLogo}>Phytochor</h1>
            </Link>
            <button
                onClick={() => logOut()}
                className={styles.signOut}
            >
                Sign Out
            </button>
        </div>
    );
}

export default connect()(Header);
