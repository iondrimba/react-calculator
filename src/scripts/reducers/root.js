import { combineReducers } from 'redux';
import history from './history';
import historyDisplay from './historyDisplay';
import displayValue from './displayValue';
import keyDown from './keyDown';

const RootReducer = combineReducers({
    history,
    historyDisplay,
    displayValue,
    keyDown
});

export default RootReducer; 