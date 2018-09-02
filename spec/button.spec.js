import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../src/scripts/components/button.jsx';

describe('Button', () => {
  it('reners button', () => {
    const wrapper = shallow(<Button label="Add" className="button" id="1" />);

    expect(wrapper.props().type).toBe('button');
    expect(wrapper.props().children).toBe('Add');
    expect(wrapper.props().className).toBe('button');
  });

  it('renders active button', () => {
    const wrapper = shallow(<Button label="Add" className="button active" id="1" />);

    expect(wrapper.props().className).toBe('button active');
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
