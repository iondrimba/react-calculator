import comma from '../src/scripts/reducers/comma';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Comma reducer tests', () => {
  let data = {};

  beforeEach(() => {
    data = Object.assign({}, data, dataFixture);
  });

  afterEach(() => {
    data = Object.assign({}, data, dataFixture);
  });

  it('adds comma to state', () => {
    const value = ',';
    const action = createAction(constants.COMMA, { value, data });

    expect(comma('20', action)).toBe('20,');
    expect(comma('0', action)).toBe('0,');
  });

  it('resets string to 0,', () => {
    const state = '150';
    const value = ',';
    const action = createAction(constants.COMMA, { value, data });

    action.data.calculated = true;

    expect(comma(state, action)).toBe('0,');
  });

  it('does not add another comma', () => {
    const state = '150,';
    const value = ',';
    const action = createAction(constants.COMMA, { value, data });

    expect(comma(state, action)).toBe('150,');
  });
});
