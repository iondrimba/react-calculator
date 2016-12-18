import { combineReducers } from 'redux';
import history from './history';
import historyDisplay from './historyDisplay';
import displayValue from './displayValue';

const RootReducer = combineReducers({
    history,
    historyDisplay,
    displayValue
});

export default RootReducer; 