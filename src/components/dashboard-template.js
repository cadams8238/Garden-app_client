import React from 'react';
import Header from './dashboard-header';
import AllGardensDashboard from './dashboard-allGardens';
import OneGardenDashboard from './dashboard-oneGarden';
import Footer from './dashboard-footer';
import './styles/dashboard-template.css';

export default function DashboardTemplate() {
    return (
        <div>
            <Header />
            <section>
                <AllGardensDashboard />
                {/* <OneGardenDashboard /> */}
            </section>
            <Footer />
        </div>
    );
}
