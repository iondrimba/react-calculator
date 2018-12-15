import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../src/scripts/components/button.js';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders button', () => {
    const wrapper = shallow(<Button label="Add" className="button" id="1" />);

    expect(wrapper.props().type).toBe('button');
    expect(wrapper.props().children).toBe('Add');
    expect(wrapper.props().className).toBe('button');
  });

  it('renders active button', () => {
    const wrapper = shallow(<Button label="Add" className="button active" id="1" />);

    expect(wrapper.props().className).toBe('button active');
  });

  describe('.isActive', () => {
    describe('when button has active class', () => {
      it('returns true', () => {
        const wrapper = mount(<Button label="Add" className="button active" id="1" />);
        const instance = wrapper.instance();

        expect(instance.isActive()).toBe(true);
      });
    });

    describe('when button does not havve active class', () => {
      it('returns false', () => {
        const wrapper = mount(<Button label="Add" className="button" id="1" />);
        const instance = wrapper.instance();

        expect(instance.isActive()).toBe(false);
      });
    });
  });

  describe('.onClick', () => {
    it('calls onClick', () => {
      spyOn(Button.prototype, 'onClick');

      const onClick = jest.fn();
      const wrapper = mount(<Button label="Add" onClick={onClick} className="button active" id="1" />);

      wrapper.find('button').simulate('click');

      expect(Button.prototype.onClick).toHaveBeenCalled();
    });

    it('calls .props.onClick', () => {
      const onClick = jest.fn();
      const wrapper = mount(<Button label="Add" onClick={onClick} className="button active" id="1" />);

      wrapper.find('button').simulate('click');

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('.onMouseDown', () => {
    it('calls onMouseDown', () => {
      spyOn(Button.prototype, 'onMouseDown');

      const onMouseDown = jest.fn();
      const wrapper = mount(<Button label="Add" onMouseDown={onMouseDown} className="button active" id="1" />);

      wrapper.find('button').simulate('mousedown');

      expect(Button.prototype.onMouseDown).toHaveBeenCalled();
    });

    it('calls .props.onMouseDown', () => {
      const onMouseDown = jest.fn();
      const wrapper = mount(<Button label="Add" onMouseDown={onMouseDown} className="button active" id="1" />);

      wrapper.find('button').simulate('mousedown');

      expect(onMouseDown).toHaveBeenCalled();
    });
  });
});
