import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import './styles/dashboard-header.css';
import styles from './styles/Buttons.module.css';
import logo from './styles/Logo.module.css';

export function Header(props) {
    const logOut = () => {
        props.dispatch(clearAuth());
    }

    return (
        <header>
            <nav className="navbar">
                <h1 className={logo.dashboardLogo}>Phytochor</h1>
                <button
                    onClick={() => logOut()}
                    className={styles.signOut}
                >
                    Sign Out
                </button>
            </nav>
        </header>
    );
}

export default connect()(Header);
