import React from 'react';
import Calendar from './calendar';
import { connect } from 'react-redux';
import { fetchOneGardenData } from '../actions/userOneGarden';
import './styles/dashboard-oneGarden.css';

export class OneGardenDashboard extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(fetchOneGardenData(id))
        // this.props.dispatch( fetchWeatherData(location) )
    }

    render() {
        return (
            <div className="all-garden-content">
                <section>
                    <h2 className="garden-name">{this.props.garden.name}</h2>
                    <p>{this.props.garden.location}</p>
                    <p>{this.props.garden.description}</p>
                </section>
                <form>
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
                </form>

            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    garden: state.oneGarden.garden
})


export default connect(mapStateToProps)(OneGardenDashboard)
