import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions/weatherData';

export class Test extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchWeatherData())
    }

    renderData() {
        console.log(this.props.data);
        return (this.props.data.map((data, index) => {
            return (
                <li key={index}>
                    {data.dt}
                </li>
            )
        }))
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    data: state.weatherDataReducer.data
});

export default connect(mapStateToProps)(Test);
