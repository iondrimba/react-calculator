import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import Button from '../src/scripts/components/button.jsx';


describe('Button', () => {
    it('should render button', () => {
        const wrapper = shallow(<Button label="Add" className="button" id="1" />);
        const inst = wrapper.instance();

        expect(wrapper.props().type).toBe('button');
        expect(wrapper.props().children).toBe('Add');
        expect(wrapper.props().className).toBe('button');
        expect(inst.isActive()).toBe(false);
    });
    it('should render active button', () => {
        const wrapper = shallow(<Button label="Add" className="button active" id="1" />);
        const inst = wrapper.instance();
        expect(inst.isActive()).toBe(true);
    });
});

