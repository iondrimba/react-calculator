import helper from '../src/scripts/model/helper';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';
import history from '../src/scripts/reducers/history';

describe('History Reducer tests', () => {

    let data = {};

    beforeEach(function () {
        data = { ...dataFixture };
    });

    afterEach(function () {
        data = { ...dataFixture };
    });

    it('should add item to history', () => {
        let state = [];
        let value = '+';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '59';
        action.data.historyDisplay = '20+';

        let result = history(state, action);
        expect(result.length).toBe(1);
    });

    it('should match historyDisplay', () => {
        let state = [];
        let value = '+';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '59';
        action.data.historyDisplay = '20+';

        let result = history(state, action);
        expect(result[0]).toBe('20+59');
    });

    it('should have length > 1', () => {
        let state = ['20+59'];
        let value = '*';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '10';
        action.data.historyDisplay = state[0];

        let result = history(state, action);
        expect(result.length).toBe(2);
    });

    it('should match second history item', () => {
        let state = ['20 + 59 * '];
        let value = '1';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '10';
        action.data.historyDisplay = state[0];

        let result = history(state, action);
        expect(result[1]).toBe(' * 10');
    });

    it('should not add item to history', () => {
        let state = ['20 + 59', ' * 10'];
        let value = '1';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '20';
        action.data.calculated = true;
        action.data.historyDisplay = '20 + 59 * 10';

        let result = history(state, action);
        expect(result.length).toBe(2);
    });

    it('should be empty', () => {
        let state = ['20 + 59', ' * 10'];
        let value = '1';
        let action = createAction(constants.CALC, { value, data });
        action.data.displayValue = '20';
        action.data.calculated = true;
        action.data.historyDisplay = '';

        let result = history(state, action);
        expect(result.length).toBe(0);
    });

});

