import React from 'react';
import AllGardensDashboard from './dashboard-allGardens';
import './styles/dashboard-template.css';

export default function DashboardTemplate() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <h1 className="logo">Phytochor</h1>
                    <a href="#" className="menu">Menu</a>
                </nav>
            </header>
            <section className="dashboard-content">
                {/* <AllGardensDashboard /> */}
            </section>
            <footer>
                <img />
            </footer>
        </div>
    );
}
