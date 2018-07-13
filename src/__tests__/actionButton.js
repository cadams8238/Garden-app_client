import React from 'react';
import {shallow, mount} from 'enzyme';

import ActionButton from '../components/actionButton';

describe('<ActionButton />', () => {
    it('Renders without crashing', () => {
        shallow(<ActionButton/>);
    });

    it('Renders a label', () => {
        const label = 'someText';
        shallow(<ActionButton label={label} />);
    });

    it('Fires off a function when clicked', () => {
        const clicked = () => {};
        shallow(<ActionButton whenClicked={clicked} />);
    })

    it('Should have universal .button class', () => {
        const className = 'button';
        const wrapper = shallow(<ActionButton/>);
        expect(wrapper.hasClass('button')).toEqual(true);
    })

    it('Should have class added to it if passed in through props', () => {
        const anotherClass = 'styled';
        shallow(<ActionButton className={anotherClass} />);
    })
});
