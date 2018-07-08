import React from 'react';
import './styles/condensedGarden-listView.css';

export default class GardenListView extends React.Component {
    deleteGarden(index) {
        console.log(index)
        // const targetGarden = this.props.data[index];
        // const id = targetGarden.id
        // console.log(targetGarden)
        // console.log(id)
        // props.dispatch( deleteGardenFromDB )
    }

    render() {
        return (
            <React.Fragment>
                <li className="condensedGarden">
                    <h3><a href={`/garden/${this.props.id}`}>{this.props.name}</a></h3>
                    <p className="description">{this.props.description}</p>
                    <button onClick={() => this.deleteGarden(this.props.id)}>Delete</button>
                </li>
            </React.Fragment>
        );
    }

}


// const gardens = props.data.map((garden, index) => (
//     <li key={index}>
//         <h3>{garden.name}</h3>
//         <p className="description">
//             {garden.description ? garden.description : garden.location}
//         </p>
//     </li>
// ))
