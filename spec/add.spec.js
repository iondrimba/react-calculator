import add from '../src/scripts/reducers/add';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Add reducers tests', () => {

  let data = {};

  beforeEach(function () {
    data = { ...dataFixture };
  });

  it('should add string to display', () => {
    let state = '';
    let value = '56';
    let action = createAction(constants.ADD, { value, data });
    let result = add(state, action);
    expect(result).toBe(action.value);

  });

  it('should limit display string', () => {
    let state = '999999999912345';
    let value = '7';
    data.displayValue = '999999999912345';
    let action = createAction(constants.ADD, { value, data });
    let result = add(state, action);
    expect(result.length).toBe(15);
  });

  it('should append string', () => {
    let state = '0,';
    let value = '30';
    let action = createAction(constants.ADD, { value, data });
    let result = add(state, action);
    expect(result).toBe('0,30');
  });
});
