import comma from '../src/scripts/reducers/comma';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Comma reducer tests', () => {

  let data = {};

  beforeEach(function () {
    data = { ...dataFixture };
  });

  afterEach(function () {
    data = { ...dataFixture };
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

  it('should reset string to 0,', () => {
    let state = '150';
    let value = ',';
    let action = createAction(constants.COMMA, { value, data });
    action.data.calculated = true;
    let result = comma(state, action);
    expect(result).toBe('0,');
  });

  it('should not add another comma', () => {
    let state = '150,';
    let value = ',';
    let action = createAction(constants.COMMA, { value, data });
    let result = comma(state, action);
    expect(result).toBe('150,');
  });
});
