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
        <div>
            <nav className={styles.navbar}>
                <Link to="/auth/signUp" className={styles.navLink}>
                    <ActionButton
                        label="Sign up"
                    />
                </Link>
                <Link to="/auth/login" className={styles.navLink}>
                    Login
                </Link>
            </nav>
            <section>
                <div className={styles.landingPageImg}></div>
            </section>
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
            <section>
                <img
                    src={beet}
                    alt="Beet illustration"
                />
            </section>
        </div>
    );
}
