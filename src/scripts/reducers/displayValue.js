import { ADD, KEY_UP, CALC, CLEAR } from '../actions/constants';
import calc from '../reducers/calc';
import add from '../reducers/add';
import clear from '../reducers/clear';

function displayValue(state = '', action) {
    switch (action.type) {
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