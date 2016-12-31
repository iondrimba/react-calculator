import React from 'react';
import { shallow, mount, render } from 'enzyme';
import clear from '../src/scripts/reducers/clear';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';

describe('Clear reducer tests', () => {

    let data = {};

    beforeEach(function () {
        data = {
            displayValue: '',
            historyDisplay: '',
            calculated: false
        }
    });

    it('should return 0 after clear', () => {
        let state = '2';
        let value = '99';
        let action = createAction(constants.CLEAR, { value, data });
        let result = clear(state, action);
        expect(result).toBe('0');
    });
});

