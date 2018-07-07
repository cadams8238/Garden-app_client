import React from 'react';
import './styles/condensedGarden-listView.css';

export default function GardenListView(props) {
    return (
        <React.Fragment>
            <li className="condensedGarden">
                <h3>{props.name}</h3>
                <p className="description">{props.description}</p>
                <button onClick={props.whenClicked(props.id)}>Delete</button>
            </li>
        </React.Fragment>
    );
}


// const gardens = props.data.map((garden, index) => (
//     <li key={index}>
//         <h3>{garden.name}</h3>
//         <p className="description">
//             {garden.description ? garden.description : garden.location}
//         </p>
//     </li>
// ))
