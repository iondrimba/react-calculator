import helper from '../src/scripts/model/helper';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';
import historyDisplay from '../src/scripts/reducers/historyDisplay';

describe('HistoryDisplay Reducer tests', () => {

  let data = {};

  beforeEach(function () {
    data = { ...dataFixture };
  });

  afterEach(function () {
    data = { ...dataFixture };
  });

  it('should append values', () => {
    let state = '';
    let value = '+';
    let action = createAction(constants.OPERATOR, { value, data });
    action.data.displayValue = '59';
    let result = historyDisplay(state, action);
    expect(result).toBe('59 + ');
  });

  it('should match string', () => {
    let state = '59 + ';
    let value = '-';
    let action = createAction(constants.OPERATOR, { value, data });
    action.data.displayValue = '59';
    let result = historyDisplay(state, action);
    expect(result).toBe('59 - ');
  });

  it('should clear historyDisplay', () => {
    let state = '20 + 5 * 10';
    let value = '10';
    let action = createAction(constants.CLEAR, { value, data });
    action.data.historyDisplay = '20 + 5 * 10'
    let result = historyDisplay(state, action);
    expect(result).toBe('');
  });
});
