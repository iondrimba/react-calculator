import calc from '../src/scripts/reducers/calc';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Calc reducers tests', () => {

    let data = {};

    beforeEach(function () {
        data = { ...dataFixture };
    });

    it('should calculate add operation', () => {
        let state = ['20+30'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('50');

    });

    it('should calculate add decimal operation', () => {
        let state = ['20+30', '+0,50'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('50,5');

    });

    it('should calculate add negative operation', () => {
        let state = ['-40+30', '+0,50'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('-9,5');

    });

    it('should calculate multiple operation', () => {
        let state = ['20+30', '*3'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('150');

    });


    it('should calculate subtract operation', () => {
        let state = ['20+30', '-30'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('20');

    });


    it('should calculate divide operation', () => {
        let state = ['20+30', '/2'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('25');

    });

    it('should return 0 if divided by zero', () => {
        let state = ['20+30', '/0'];
        let value = [];
        let action = createAction(constants.CALC, { value, data });
        let result = calc(state, action);
        expect(result).toBe('0');
    });
});

