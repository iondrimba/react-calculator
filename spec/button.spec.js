import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Button from '../src/scripts/components/button.jsx';


describe('Button', () => {
    it('should render button', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<Button label="Add" className="button"/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('button');
        expect(result.props.className).toBe('button');
        expect(result.props.children).toEqual('Add');
    });
});
