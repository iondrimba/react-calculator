import { combineReducers } from 'redux';
import historyDisplay from './historyDisplay';
import history from './history';
import displayValue from './displayValue';
import MapKeys from '../model/mapKeys';
import keyDown from './keyDown';
import calculated from './calculated';
import muted from './muted';

const RootReducer = combineReducers({
  historyDisplay,
  history,
  displayValue,
  calculated,
  keyDown,
  keys: () => MapKeys,
  muted
});

export default RootReducer;
