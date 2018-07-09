import React from 'react';
// import Calendar from './calendar';
import { connect } from 'react-redux';
import { fetchOneGardenData } from '../actions/userOneGarden';
import { fetchWeatherData } from '../actions/weatherData';

import dashboard from './styles/Dashboards.module.css';
import typography from './styles/Typography.module.css';

export class OneGardenDashboard extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(fetchOneGardenData(id))
            .then(data => this.props.dispatch(fetchWeatherData(data.zipcode)))
    }

    render() {
        // console.log(this.props.needsWatering)
        const watering = this.props.needsWatering ?
            <p>Water Garden</p> :
            <p>No need to water today. Nature's got it.</p>;

        return (
            <div className={dashboard.mainContent}>
                <section>
                    <h2 className={typography.heading}>{this.props.garden.name}</h2>
                    <p>Location: {this.props.garden.location}</p>
                    <p>Description: {this.props.garden.description}</p>
                </section>
                {watering}
                {/* <form>
                    <h4 className="tasks">Tasks for Today:</h4>
                    <ul className="to-do-list">
                        <li>
                            <input
                                className="checkbox"
                                id="checkbox"
                                type="checkbox"
                            />
                            <label htmlFor="checkbox">Water Garden</label>
                        </li>
                    </ul>
                </form> */}
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    garden: state.oneGarden.garden,
    needsWatering: state.weather.needsWatering
})


export default connect(mapStateToProps)(OneGardenDashboard)
