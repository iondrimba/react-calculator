import * as constants from '../actions/constants';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';
import comma from '../reducers/comma';
import switchOperator from '../reducers/switchOperator';
import percent from '../reducers/percent';
import history from '../reducers/history';
import calc from '../reducers/calc';


function displayValue(state = '', action) {
  switch (action.type) {
    case constants.SWITCH_OPERATOR:
      return switchOperator(state, action);
    case constants.COMMA:
      return comma(state, action);
    case constants.DEL:
      return del(state, action);
    case constants.CALC:
      return calc(history(action.data.history, action), action);
    case constants.CLEAR:
      return clear(state, action);
    case constants.PERCENT:
      return add(percent(action.data.historyDisplay, action), action);
    case constants.ADD:
      return comma(add(state, action), action);

  }
  return state;
}

export default displayValue;
