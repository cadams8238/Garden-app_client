import React from 'react';
import Calendar from './calendar';
import './styles/dashboard-oneGarden.css';

export default class OneGardenDashboard extends React.Component {
    // /dashboard/garden/:id
    // componentDidMount() {
    //     const id = this.props.params
    //     this.props.dispatch( fetchOneGarden(id) )
    // }

    render() {
        return (
            <div className="all-garden-content">
                <section>
                    <h2 className="garden-name">Name of Garden</h2>
                    <p>Location</p>
                    <p>Description</p>
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
