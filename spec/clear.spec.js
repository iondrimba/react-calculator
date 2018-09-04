import clear from '../src/scripts/reducers/clear';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Clear reducer tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  it('returns 0 after clear', () => {
    const state = '2';
    const value = '99';
    const action = createAction(constants.CLEAR, { value, data });
    const result = clear(state, action);

    expect(result).toBe('0');
  });

  describe('default action', () => {
    describe('when action.type not CLEAR', () => {
      it('returns default state', () => {
        const state = '2';
        const value = '99';
        const action = createAction(constants.ADD, { value, data });
        const result = clear(state, action);

        expect(result).toBe('2');
      });
    });
  });
});
