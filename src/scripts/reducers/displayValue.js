import { ADD, CALC, CLEAR, DEL, COMMA, SWITCH_OPERATOR, PERCENT } from '../actions/constants';
import calc from '../reducers/calc';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';
import comma from '../reducers/comma';
import switchOperator from '../reducers/switchOperator';
import percent from '../reducers/percent';


function displayValue(state = '', action) {
    switch (action.type) {
        case SWITCH_OPERATOR:
            state = switchOperator(state, action);
            break;
        case COMMA:
            state = comma(state, action);
            break;
        case DEL:
            state = del(state, action);
            break;
        case CLEAR:
            state = clear(state, action);
            break;
        case PERCENT:
            state = add(percent(action.data.historyDisplay, action), action);
            break;
        case CALC:
            state = calc(state, action);
            break;
        case ADD:
            state = comma(add(state, action), action);
            break;

    }
    return state;
}

export default displayValue;
