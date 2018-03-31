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

function _addCalculatedToHistory({ data, state, newItem }) {
  let output = []
  const { historyDisplay } = data;

  if (historyDisplay.length) {
    output = _addToHistory({ data, newItem, state });

    output = output.length ? output : [...state];
  }

  return output;
}

function history(state = [], action) {
  let newItem = '';
  let output = [];
  switch (action.type) {
    case CLEAR:
      state = output;
      break;
    case CALC:
      output = _addCalculatedToHistory({data: action.data, state, newItem});

      return output;
  }
  return state;
}

export default history;
