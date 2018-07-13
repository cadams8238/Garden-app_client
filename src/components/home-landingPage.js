import React from 'react';
import { Link } from 'react-router-dom';

import ActionButton from './actionButton';
import styles from './styles/App-landingPage.module.css';
import location from '../images/location.svg';
import watering from '../images/watering.svg';
import thumb from '../images/thumb.svg';
import beet from '../images/beet.svg';


export default function Home() {

    return (
        <React.Fragment>
            <nav className={styles.navbar}>
                <Link to="/auth/signUp"
                    className={styles.navLink}
                >
                    <ActionButton label="Sign up" />
                </Link>
                <Link to="/auth/login"
                    className={[styles.navLink, styles.link].join(' ')}
                >
                    Login
                </Link>
            </nav>

            <header role="banner"
                className={[styles.landingPageImg, styles.landingPageText].join(' ')}
            >
                <h1>Phytochor</h1>
                <p>Know when to water your garden based on the weather</p>
            </header>

            <main role="main">
                <section className={[styles.flexGrid, styles.featurePage].join(' ')}>
                    <div className={[styles.feature, styles.col].join(' ')}>
                        <img
                            src={location}
                            alt="Location icon illustration"
                        />
                        <p>Location specific weather data based on zip code.</p>
                    </div>
                    <div className={[styles.feature, styles.col].join(' ')}>
                        <img
                            src={watering}
                            alt="Watering can illustration"
                        />
                        <p>Only water your garden when it's not raining.</p>
                    </div>
                    <div className={[styles.feature, styles.col].join(' ')}>
                        <img
                            src={thumb}
                            alt="Green thumb illustration"
                        />
                        <p>Have a green thumb? Create multiple gardens.</p>
                    </div>
                </section>

                <section className={[styles.flexGrid, styles.greenBkgrd].join(' ')}>
                    <div className={styles.col}>
                        <img
                            className={styles.beetImg}
                            src={beet}
                            alt="Beet illustration"
                        />

                        <div className={styles.beetText}>
                            <h2>Ready to</h2>
                            <h2>dig in?</h2>
                            <Link to="/auth/signUp">
                                <ActionButton
                                    label="Sign up"
                                    className="greenOnGreen"
                                />
                            </Link>
                            <Link to="/auth/login" className={styles.loginLink}>
                                <p>Already signed up? Login here</p>
                            </Link>
                        </div>
                    </div>
                    <div className={[styles.col, styles.demoUser].join(' ')}>
                        <p>
                            Just looking to demo the app?
                            Login with the following credientials to browse,
                            no strings attached.
                        </p>
                        <p>Username:</p>
                        <p>User</p>
                        <p>Password:</p>
                        <p>TestUser</p>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}
