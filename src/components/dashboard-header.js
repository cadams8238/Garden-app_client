import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import './styles/dashboard-header.css';

export function Header(props) {
    const logOut = () => {
        props.dispatch(clearAuth());
    }

    return (
        <header>
            <nav className="navbar">
                <h1 className="logo">Phytochor</h1>
                <button
                    onClick={() => logOut()}
                    className="logOut"
                >
                    SIGN OUT
                </button>
            </nav>
        </header>
    );
}

export default connect()(Header);
