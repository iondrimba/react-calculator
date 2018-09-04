import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';
import historyDisplay from '../src/scripts/reducers/historyDisplay';

describe('HistoryDisplay Reducer tests', () => {

  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  afterEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  it('appends values', () => {
    const state = '';
    const value = '+';
    const action = createAction(constants.OPERATOR, { value, data });

    action.data.displayValue = '59';

    expect(historyDisplay(state, action)).toBe('59 + ');
  });

  it('matches string', () => {
    const state = '59 + ';
    const value = '-';
    const action = createAction(constants.OPERATOR, { value, data });

    action.data.displayValue = '59';

    expect(historyDisplay(state, action)).toBe('59 - ');
  });

  it('clears historyDisplay', () => {
    const state = '20 + 5 * 10';
    const value = '10';
    const action = createAction(constants.CLEAR, { value, data });

    action.data.historyDisplay = '20 + 5 * 10'

    expect(historyDisplay(state, action)).toBe('');
  });

  describe('default action', () => {
    describe('when no matching action.type present', () => {
      it('returns default state', () => {
        const state = '59 + ';
        const value = '-';
        const action = createAction(constants.ADD, { value, data });

        action.data.displayValue = '59';

        expect(historyDisplay(state, action)).toBe('59 + ');
      });
    });
  });
});
