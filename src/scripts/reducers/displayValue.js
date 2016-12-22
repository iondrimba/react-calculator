import { ADD, CALC, CLEAR, DEL } from '../actions/constants';
import calc from '../reducers/calc';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';

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