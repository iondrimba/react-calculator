import { ADD, KEY_UP, CALC, CLEAR, DEL, OPERATOR } from '../actions/constants';
import calc from '../reducers/calc';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';
import operator from '../reducers/operator';
import historyDisplay from '../reducers/historyDisplay';

function displayValue(state = '', action) {
    switch (action.type) {
        case DEL:
            return del(state, action);        
        case CLEAR:
            return clear(state, action);
        case CALC:
            return calc(state, action);
        case ADD:
            return add(state, action);

    }
    return state;
}

export default displayValue;