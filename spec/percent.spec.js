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

    describe('when matching action.type present', () => {
      it('returns 0,525', () => {
        const state = '10,50*';
        const value = '5';
        const action = createAction(constants.PERCENT, { value, data:{
          displayValue: '5',
          historyDisplay: '10,50 * ',
          calculated: false,
          history:[]
        }});

        const result = percent(state, action);

        expect(result).toBe('0,525');
      });
    });
  });
});
