import calculated from '../src/scripts/reducers/calculated';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Calculated reducer tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  it('calculates flag to true', () => {
    const state = false;
    const value = true;
    const action = createAction(constants.CALCULATED, { value, data });
    const result = calculated(state, action);

    expect(result).toBe(true);
  });

  it('calculates flag to false', () => {
    const state = true;
    const value = false;
    const action = createAction(constants.CALCULATED, { value, data });
    const result = calculated(state, action);

    expect(result).toBe(false);
  });

  describe('default action', () => {
    describe('when action.type not CALCULATED', () => {
      it('returns default state', () => {
        const state = false;
        const value = true;
        const action = createAction(constants.ADD, { value, data });
        const result = calculated(state, action);

        expect(result).toBe(false);
      });
    });
  });
});
