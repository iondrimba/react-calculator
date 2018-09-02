import displayValue from '../src/scripts/reducers/displayValue';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('DisplayValue reducer tests', () => {
  let data = {};

  beforeEach(function () {
    data = Object.assign({}, data, dataFixture);
  });

  it('displays negative value', () => {
    const state = '9';
    const value = '';
    const action = createAction(constants.SWITCH_OPERATOR, { value, data });

    expect(displayValue(state, action)).toBe('-9');
  });

  it('displays positive value', () => {
    const state = '-9';
    const value = '';
    const action = createAction(constants.SWITCH_OPERATOR, { value, data });

    expect(displayValue(state, action)).toBe('9');
  });

  it('displays value with comma', () => {
    const state = '29';
    const value = ',';
    const action = createAction(constants.COMMA, { value, data });

    expect(displayValue(state, action)).toBe('29,');
  });

  it('deletes a char from display value', () => {
    const state = '29,56';
    const value = '';
    const action = createAction(constants.DEL, { value, data });

    expect(displayValue(state, action)).toBe('29,5');
  });

  it('clears display value', () => {
    const state = '30';
    const value = '9';
    const action = createAction(constants.CLEAR, { value, data });

    expect(displayValue(state, action)).toBe('0');
  });

  it('displays calculated values', () => {
    const state = '';
    const value = '';
    const action = createAction(constants.CALC, { value, data });

    action.data.displayValue = '30';
    action.data.historyDisplay = '20+';

    expect(displayValue(state, action)).toBe('50');
  });

  it('adds value to display', () => {
    expect(displayValue('9', createAction(constants.ADD, { value: '8', data }))).toBe('98');
    expect(displayValue('98', createAction(constants.ADD, { value: '4', data }))).toBe('984');
  });

  it('displays correct value when doing percent calculation', () => {
    const state = '45*';
    const value = '';
    const action = createAction(constants.PERCENT, { value, data });

    action.data.historyDisplay = '10*'
    action.data.displayValue = '45';

    expect(displayValue(state, action)).toBe('4,5');
  });

  it('returns zero if no history was added when doing percent calculation', () => {
    const state = '45*';
    const value = '';
    const action = createAction(constants.PERCENT, { value, data });

    action.data.historyDisplay = ''
    action.data.displayValue = '45';

    expect(displayValue(state, action)).toBe('0');
  });
});
