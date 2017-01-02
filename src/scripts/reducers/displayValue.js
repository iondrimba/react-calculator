import * as constants from '../actions/constants';
import add from '../reducers/add';
import clear from '../reducers/clear';
import del from '../reducers/del';
import comma from '../reducers/comma';
import switchOperator from '../reducers/switchOperator';
import percent from '../reducers/percent';
import history from '../reducers/history';
import calc from '../reducers/calc';


function displayValue(state = '', action) {
    switch (action.type) {
        case constants.SWITCH_OPERATOR:
            state = switchOperator(state, action);
            break;
        case constants.COMMA:
            state = comma(state, action);
            break;
        case constants.DEL:
            state = del(state, action);
            break;
        case constants.CALC:
            state = calc(history(action.data.history, action), action);
            break;
        case constants.CLEAR:
            state = clear(state, action);
            break;
        case constants.PERCENT:
            state = add(percent(action.data.historyDisplay, action), action);
            break;
        case constants.ADD:
            state = comma(add(state, action), action);
            break;

    }
    return state;
}

export default displayValue;
