import React from 'react';
import {shallow, mount} from 'enzyme';

import {DashboardTemplate} from '../components/dashboard-template';

describe('<DashboardTemplate />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn();
        shallow(<DashboardTemplate dispatch={callback}/>);
    });
});
