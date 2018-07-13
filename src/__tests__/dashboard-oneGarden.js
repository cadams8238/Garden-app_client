import React from 'react';
import {shallow, mount} from 'enzyme';

import {OneGardenDashboard} from '../components/dashboard-oneGarden';

describe('<OneGardenDashboard />', () => {
    it('Should render a garden\'s info', () => {
        const props = {
            garden: {
                name: "garden",
                location: "nowhere",
                description: "grow all the things"
            },
            match: {
                params: {
                    id: 123
                }
            },
            dispatch: () => ({
                then: () => {}
            })
        }

        // const garden = {
        //     name: "garden",
        //     location: "nowhere",
        //     description: "grow all the things"
        // }
        //
        // const match = {
        //     params: {
        //         id: 123
        //     }
        // }
        //
        // const dispatch = () => ({
        //     then: () => {}
        // });

        shallow(<OneGardenDashboard {...props}/>);
    })
});
