import { ADD, CALC, CLEAR, DEL, COMMA, SWITCH_OPERATOR } from '../actions/constants';
import calc from '../reducers/calc';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';
import comma from '../reducers/comma';
import switchOperator from '../reducers/switchOperator';

function displayValue(state = '', action) {
    switch (action.type) {
        case SWITCH_OPERATOR:
            return switchOperator(state, action);
        case COMMA:
            return comma(state, action);
        case DEL:
            return del(state, action);
        case CLEAR:
            return clear(state, action);
        case CALC:
            return calc(state, action);
        case ADD:
            return comma(add(state, action), action);

    }
    return state;
}

export default displayValue;