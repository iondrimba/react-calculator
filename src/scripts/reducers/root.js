import { combineReducers } from 'redux';
import historyDisplay from './historyDisplay';
import displayValue from './displayValue';
import keyDown from './keyDown';
import keys from './keys';
import calc from './calc';
import clear from './clear';


const RootReducer = combineReducers({
    historyDisplay,
    displayValue,    
    keyDown,
    keys
});

export default RootReducer; 