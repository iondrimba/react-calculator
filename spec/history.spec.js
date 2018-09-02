import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';
import history from '../src/scripts/reducers/history';

describe('History Reducer tests', () => {
  let data = {};

  beforeEach(() => {
    data = Object.assign({}, data, dataFixture);
  });

  afterEach(() => {
    data = Object.assign({}, data, dataFixture);
  });

  it('adds item to history', () => {
    const state = [];
    const value = '+';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '59';
    action.data.historyDisplay = '20+';

    expect(history(state, action).length).toBe(1);
  });

  it('matches historyDisplay', () => {
    const state = [];
    const value = '+';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '59';
    action.data.historyDisplay = '20+';

    expect(history(state, action)[0]).toBe('20+59');
  });

  it('has length > 1', () => {
    const state = ['20+59'];
    const value = '*';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '10';
    action.data.historyDisplay = state[0];

    expect(history(state, action).length).toBe(2);
  });

  it('matches second history item', () => {
    const state = ['20 + 59 * '];
    const value = '1';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '10';
    action.data.historyDisplay = state[0];

    expect(history(state, action)[1]).toBe(' * 10');
  });

  it('does not add item to history', () => {
    const state = ['20 + 59', ' * 10'];
    const value = '1';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '20';
    action.data.calculated = true;
    action.data.historyDisplay = '20 + 59 * 10';

    expect(history(state, action).length).toBe(2);
  });

  it('return empty history', () => {
    const state = ['20 + 59', ' * 10'];
    const value = '1';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '20';
    action.data.calculated = true;
    action.data.historyDisplay = '';

    expect(history(state, action).length).toBe(0);
  });
});
