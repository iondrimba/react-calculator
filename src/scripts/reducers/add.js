import { ADD } from '../actions/constants';
import helper from '../model/helper';

function add(state = '', action) {
  let commands = [];
  let lastCommand = [];
  let maxDisplay = 15;
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
        if (calculated ||
          helper.isNumberZero(state) ||
          helper.isNumberZero(state + action.value) ||
          (helper.isEmpty(lastCommand) && calculated)) {
          output = action.value;
        } else {
          output += `${state}${action.value}`;
        }

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
