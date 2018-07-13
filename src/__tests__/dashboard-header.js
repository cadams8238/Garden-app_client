import React from 'react';
import {shallow, mount} from 'enzyme';

import {Header} from '../components/dashboard-header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header/>);
    });
});
