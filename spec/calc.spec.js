import calc from '../src/scripts/reducers/calc';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('Calc reducers tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  it('calculates add operation', () => {
    const state = ['20+30'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('50');
  });

  it('calculates add decimal operation', () => {
    const state = ['20+30', '+0,50'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('50,50');
  });

  it('calculates add negative operation', () => {
    const state = ['-40+30', '+0,50'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('-9,50');
  });

  it('calculates multiple operation', () => {
    const state = ['20+30', '*3'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('150');
  });


  it('calculates subtract operation', () => {
    const state = ['20+30', '-30'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('20');
  });

  it('calculates divide operation', () => {
    const state = ['20+30', '/2'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);
    expect(result).toBe('25');
  });

  it('returns 0 if divided by zero', () => {
    const state = ['20+30', '/0'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('0');
  });

  it('returns 0 if zero divided by zero', () => {
    const state = ['0', '/0'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('0');
  });

  it('returns 0 if invalid calc', () => {
    const state = ['0,', '/0'];
    const value = [];
    const action = createAction(constants.CALC, { value, data });
    const result = calc(state, action);

    expect(result).toBe('0');
  });
});
