import { OPERATOR } from '../actions/constants';
import helper from '../model/helper';

function _appendOperatorToZero({ output, formatedValue, value }) {
  if (helper.isNaN(formatedValue) || helper.isNumberZero(formatedValue)) {
    output = `0 ${value} `;
  }
  return output;
}

function _appendOperatorToHistory({ output, historyDisplay, displayValue, value, calculated }) {
  if (calculated === false || helper.isEmpty(historyDisplay)) {
    output = `${historyDisplay}${displayValue} ${value} `;
  } else {
    output = historyDisplay.replace(/\D $/, ` ${value} `);
  }
  return output;
}

function operator(state = '0', action) {
  let { historyDisplay, displayValue, calculated } = action.data;
  let output = '0';

  switch (action.type) {
    case OPERATOR:
      var formatedValue = helper.commaToPoint(displayValue);

      output = _appendOperatorToZero({ output, formatedValue, value: action.value })

      output = _appendOperatorToHistory({ output, historyDisplay, displayValue, value: action.value, calculated })

      return output;
  }
  return state;
}

export default operator;
