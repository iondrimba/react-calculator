import React from 'react';
import { shallow, mount, render } from 'enzyme';
import comma from '../src/scripts/reducers/comma';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';

describe('Comma reducer tests', () => {

    let data = {};

    beforeEach(function () {
        data = {
            displayValue: '',
            historyDisplay: '',
            calculated: false
        }
    });

    it('should add comma to state', () => {
        let state = '20';
        let value = ',';
        let action = createAction(constants.COMMA, { value, data });
        let result = comma(state, action);
        expect(result).toBe('20,');

        state = '0';
        result = comma(state, action);
        expect(result).toBe('0,');
    });

    it('should return empty string', () => {
        let state = '';
        let value = ',';
        let action = createAction(constants.COMMA, { value, data });
        let result = comma(state, action);
        expect(result).toBe('');
    });
});

