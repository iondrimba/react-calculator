import { combineReducers } from 'redux';
import history from './history';
import displayValue from './displayValue';

const RootReducer = combineReducers({
    history,
    displayValue
});

export default RootReducer; 