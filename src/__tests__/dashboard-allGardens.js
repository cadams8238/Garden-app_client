import React from 'react';
import configureMockStore from 'redux-mock-store';
import {shallow, mount} from 'enzyme';

import ConnectedAllGardensDashboard, {AllGardensDashboard} from '../components/dashboard-allGardens';


//unconnected (state simulated through props), shallow
describe('<AllGardensDashboard />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AllGardensDashboard data={[]}/>);
    })

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Should contain a <section> tag', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

    it('<section> tag should have .mainContent class', () => {
        expect(wrapper.find('section').hasClass('mainContent'));
    })
});

//connected (with state), shallow
describe('shallow with state', () => {
    let wrapper, store;
    const initialState = {
        data: [{
            name: "garden"
        }]
    }
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<ConnectedAllGardensDashboard store={store}/>);
    })

    it('Connected component renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    })

})
