import { CALC, CLEAR } from '../actions/constants';


function _appendValueToNewItem({ state, data }) {
  const { historyDisplay, displayValue } = data;

  let newItem = '';

  if (state.length >= 1) {
    const operator = historyDisplay.substr(historyDisplay.length - 3, 3);
    newItem = `${operator}${displayValue}`;
  }

  return newItem;
}

function _addToHistory({ data, newItem, state }) {
  const { historyDisplay, calculated, displayValue } = data;
  let output = [];

  newItem = !calculated ? _appendValueToNewItem({ state, data }) : '';
  newItem = !newItem.length ? `${historyDisplay}${displayValue}` : newItem;
  output = !calculated ? [...state, newItem] : [];

  return output;
}

function history(state = [], action) {
  let newItem = '';
  let output = [];
  const { historyDisplay } = action.data;

  switch (action.type) {
    case CLEAR:
      state = [];
      break;
    case CALC:
      output = historyDisplay.length ? _addToHistory({ data: action.data, newItem, state }) : [];

      output = historyDisplay.length ? output.length ? output : [...state] : [];

      return output;
  }
  return state;
}

export default history;
