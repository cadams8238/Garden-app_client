import React from 'react';
import Calendar from './calendar';
import './styles/dashboard-oneGarden.css';

export default function OneGardenDashboard() {
    // /garden/:id
    // componentDidMount() {
    //     const id = this.props.params
    //     this.props.dispatch( fetchOneGarden(id) )
    // }


    return (
        <div className="all-garden-content">
            <section>
                <h2 className="garden-name">Name of Garden</h2>
                <p>Location</p>
            </section>
            <form>
                <h4 className="tasks">Tasks for Today:</h4>
                <ul className="to-do-list">
                    <li>
                        <input type="checkbox" /> Water Garden
                    </li>
                </ul>
            </form>
            <section>
                <h4 className="tasks">Completed Tasks:</h4>
                <Calendar />
            </section>
        </div>
    );
}
