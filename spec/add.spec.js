import add from '../src/scripts/reducers/add';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Add reducers tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign(data, dataFixture);
  });

  it('adds string to display', () => {
    const state = '';
    const value = '56';
    const action = createAction(constants.ADD, { value, data });
    const result = add(state, action);

    expect(result).toBe(action.value);
  });

  it('limits display string', () => {
    const state = '999999999912345';
    const value = '7';

    data.displayValue = '999999999912345';

    const action = createAction(constants.ADD, { value, data });
    const result = add(state, action);

    expect(result.length).toBe(15);
  });

  it('appends string', () => {
    const state = '0,';
    const value = '30';
    const action = createAction(constants.ADD, { value, data });
    const result = add(state, action);

    expect(result).toBe('0,30');
  });
});
