import React from 'react';
import { shallow, mount, render } from 'enzyme';
import calculated from '../src/scripts/reducers/calculated';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';

describe('Calculated reducer tests', () => {

    let data = {};

    beforeEach(function () {
        data = {
            displayValue: '',
            historyDisplay: '',
            calculated: false
        }
    });

    it('should set calculated flag to true', () => {
        let state = false;
        let value = true;
        let action = createAction(constants.CALCULATED, { value, data });
        let result = calculated(state, action);
        expect(result).toBe(true);
    });

    it('should set calculated flag to false', () => {
        let state = true;
        let value = false;
        let action = createAction(constants.CALCULATED, { value, data });
        let result = calculated(state, action);
        expect(result).toBe(false);
    });
});

