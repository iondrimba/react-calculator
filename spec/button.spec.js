import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/scripts/components/button.jsx';


describe('Button', () => {
    it('should render button', () => {
        const wrapper = shallow(<Button label="Add" className="button" id="1" />);
        expect(wrapper.props().type).toBe('button');
        expect(wrapper.props().children).toBe('Add');
        expect(wrapper.props().className).toBe('button');
    });
    it('should render active button', () => {
        const wrapper = shallow(<Button label="Add" className="button active" id="1" />);
        expect(wrapper.props().className).toBe('button active');
    });
});

