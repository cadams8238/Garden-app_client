import React from 'react';
import {shallow, mount} from 'enzyme';

import AddGardenForm from '../components/addGarden-form';
import ActionButton from '../components/actionButton';


describe('<AddGardenForm />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddGardenForm />);
    })

    it('Smoke test', () => {
        shallow(<AddGardenForm/>);
    });

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    // it('Should contain a <form> tag', () => {
    //     expect(wrapper.find('form').length).toEqual(1);
    // })
    //
    // it('Should contain 2 action buttons', () => {
    //     expect(wrapper.find('ActionButton')).to.have.length(2);
    // })


});
