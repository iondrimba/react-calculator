import { combineReducers } from 'redux';
import historyDisplay from './historyDisplay';
import displayValue from './displayValue';
import MapKeys from '../model/mapKeys';
import keyDown from './keyDown';
import calculated from './calculated';


const RootReducer = combineReducers({
    historyDisplay,
    displayValue,
    calculated,
    keyDown,
    keys: () => MapKeys
});

export default RootReducer; 