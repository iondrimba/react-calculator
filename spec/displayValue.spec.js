import displayValue from '../src/scripts/reducers/displayValue';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';
import dataFixture from './dataFixture';

describe('DisplayValue reducer tests', () => {

  let data = {};

  beforeEach(function () {
    data = { ...dataFixture };
  });

  it('should display negative value', () => {
    let state = '9';
    let value = '';
    let action = createAction(constants.SWITCH_OPERATOR, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('-9');
  });

  it('should display positive value', () => {
    let state = '-9';
    let value = '';
    let action = createAction(constants.SWITCH_OPERATOR, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('9');
  });

  it('should display value with comma', () => {
    let state = '29';
    let value = ',';
    let action = createAction(constants.COMMA, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('29,');
  });

  it('should delete a char from display value', () => {
    let state = '29,56';
    let value = '';
    let action = createAction(constants.DEL, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('29,5');
  });

  it('should clear display value', () => {
    let state = '30';
    let value = '9';
    let action = createAction(constants.CLEAR, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('0');
  });

  it('should display calculated values', () => {
    let state = '';
    let value = '';
    let action = createAction(constants.CALC, { value, data });
    action.data.displayValue = '30';
    action.data.historyDisplay = '20+';
    let result = displayValue(state, action);
    expect(result).toBe('50');
  });

  it('should add value to display', () => {
    let state = '9';
    let value = '8';
    let action = createAction(constants.ADD, { value, data });
    let result = displayValue(state, action);
    expect(result).toBe('98');

    action.value = '4';
    result = displayValue(result, action);
    expect(result).toBe('984');
  });


  it('should display correct value when doing percent calculation', () => {
    let state = '45*';
    let value = '';
    let action = createAction(constants.PERCENT, { value, data });
    action.data.historyDisplay = '10*'
    action.data.displayValue = '45';
    let result = displayValue(state, action);
    expect(result).toBe('4,5');
  });

  it('should return zero if no history was added when doing percent calculation', () => {
    let state = '45*';
    let value = '';
    let action = createAction(constants.PERCENT, { value, data });
    action.data.historyDisplay = ''
    action.data.displayValue = '45';
    let result = displayValue(state, action);
    expect(result).toBe('0');
  });
});
