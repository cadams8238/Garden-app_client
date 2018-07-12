import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import requiresLogin from './requires-login';
import { getGardensData } from '../actions/userGardens';
import Header from './dashboard-header';
import AllGardensDashboard from './dashboard-allGardens';
import OneGardenDashboard from './dashboard-oneGarden';
import largeIllustration from '../images/dashboardFooter.svg';
// import smallIllustration from '../images/mobileFooter.svg';
import styles from './styles/Dashboards.module.css';


export class DashboardTemplate extends React.Component {
    componentDidMount() {
        this.props.dispatch(getGardensData());
    }

    render() {
        // console.log(window.innerWidth)
        // const footer = (window.innerWidth > 768) ?
        //     {largeIllustration} :
        //     {smallIllustration}

        return (
            <React.Fragment>
                <Header />
                <Route exact path="/dashboard/allGardens" component={AllGardensDashboard} />
                <Route path="/dashboard/oneGarden/:id" component={OneGardenDashboard} />
                <img
                    className={styles.footerImg}
                    src={largeIllustration}
                    alt="Fruit and veggie illustrations"
                />
            </React.Fragment>
        );
    }
}

export default requiresLogin()(connect()(DashboardTemplate));
