import React from 'react';
import {shallow, mount} from 'enzyme';

import AddGardenForm from '../components/addGarden-form';

describe('<AddGardenForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddGardenForm/>);
    });
});
