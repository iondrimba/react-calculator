import React from 'react';
import { shallow, mount, render } from 'enzyme';
import calc from '../src/scripts/reducers/calc';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';

describe('Calc reducers tests', () => {

    let data = {};

    beforeEach(function () {
        data = {
            displayValue: '',
            historyDisplay: '',
            calculated: false
        }
    });

    it('should calculate add operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '30';
        data.historyDisplay = '90+';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('120');

    });

    it('should calculate add decimal operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '30,50';
        data.historyDisplay = '20,50+';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('51');

    });

    it('should calculate add negative operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '-30,50';
        data.historyDisplay = '20,50+';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('-10');

    });

    it('should calculate multiple operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '10';
        data.historyDisplay = '3*';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('30');

    });


    it('should calculate substract operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '10';
        data.historyDisplay = '30-';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('20');

    });


    it('should calculate divide operation', () => {
        let state = '';
        let value = '';
        data.displayValue = '10';
        data.historyDisplay = '30/';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('3');

    });

    it('should return empty string if divided by zero', () => {
        let state = '';
        let value = '';
        data.displayValue = '0';
        data.historyDisplay = '30/';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('');
    });

    it('should return empty string if history pattern invalid', () => {
        let state = '';
        let value = '';
        data.displayValue = '30';
        data.historyDisplay = '90+a*/';
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('');

    });
});

