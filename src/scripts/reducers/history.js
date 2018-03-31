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

function history(state = [], action) {
  let newItem = '';
  let output = [];

  switch (action.type) {
    case CLEAR:
      state = [];
      break;
    case CALC:
      if (action.data.historyDisplay.length) {
        if (action.data.calculated === false) {
          newItem = _appendValueToNewItem({ state, data: action.data });
          newItem = newItem.length ? newItem : `${action.data.historyDisplay}${action.data.displayValue}`;
          output = [...state, newItem];
        } else {
          output = [...state];
        }
      }

      return output;
  }
  return state;
}

export default history;
