import { ADD } from '../actions/constants';
import helper from '../model/helper';

function _concatValues(calculated, state, lastCommand, value) {
  return calculated || helper.isNumberZero(state) || helper.isNumberZero(state + value) || (helper.isEmpty(lastCommand) && calculated);
}

function _appendValues({ output, calculated, state, lastCommand, value }) {
  if (_concatValues(calculated, state, lastCommand, value)) {
    output = `${state}${value}`;
  } else {
    output += `${state}${value}`;
  }

  return output;
}

const maxDisplay = 15;

function add(state = '', action) {
  let commands = [], lastCommand = [];
  let { historyDisplay, displayValue, calculated } = action.data;
  let output = '';

  switch (action.type) {
    case ADD:
      if (historyDisplay) {
        commands = historyDisplay.split('');
      }

      if (commands.length > 1) {
        lastCommand = commands.pop();
      }

      if (helper.hasValue(state)) {
        output = _appendValues({
          output, calculated, state, lastCommand, value: action.value
        });
      } else {
        output = action.value;
      }

      if (output.length > maxDisplay) {
        output = displayValue;
      }

      return output;
  }
  return state;
}

export default add;
