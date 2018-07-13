import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from '../components/form-input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        const props = {
            meta: {
                touched: {},
                error: {},
                active: {},
                warning: {}
            },
            id: 'input',
            input: {},
            label: 'label'
        }

        shallow(<Input {...props}/>);
    });

});
