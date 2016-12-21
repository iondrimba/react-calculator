import { combineReducers } from 'redux';
import historyDisplay from './historyDisplay';
import displayValue from './displayValue';
import MapKeys from '../model/mapKeys';
import keyDown from './keyDown';


const RootReducer = combineReducers({
    historyDisplay,
    displayValue,
    keyDown,
    keys: () => MapKeys
});

export default RootReducer; 