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

function _getLastCommand(commands) {
  let lastCommand = [];
  if (commands.length > 1) {
    lastCommand = commands.pop();
  }

  return lastCommand;
}

function _getCommands(historyDisplay) {
  let commands = [];
  if (historyDisplay) {
    commands = historyDisplay.split('');
  }

  return commands;
}

function _getOutput(conditional, firstResult, secondResult) {
  return conditional ? firstResult : secondResult;
}

const maxDisplay = 15;

function add(state = '', action) {
  let lastCommand = [];
  let { historyDisplay, displayValue, calculated } = action.data;
  let output = '';

  switch (action.type) {
    case ADD:
      lastCommand = _getLastCommand(_getCommands(historyDisplay));

      output = helper.hasValue(state) ? _appendValues({ output, calculated, state, lastCommand, value: action.value }) : output;

      output = _getOutput(output.length, output, action.value);

      output = _getOutput(output.length > maxDisplay, displayValue, output);

      return output;
  }
  return state;
}

export default add;
