import percent from '../src/scripts/reducers/percent';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Clear reducer tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  describe('default action', () => {
    describe('when no matching action.type present', () => {
      it('returns default state', () => {
        const state = '2';
        const value = '99';
        const action = createAction(constants.ADD, { value, data });
        const result = percent(state, action);

        expect(result).toBe('2');
      });
    });
  });
});
