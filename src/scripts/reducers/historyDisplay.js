import {  CLEAR, OPERATOR, PERCENT, HISTORY_CLEAR } from '../actions/constants';
import operator from '../reducers/operator';
import percent from '../reducers/percent';

function historyDisplay(state = '', action) {
    switch (action.type) {
        case CLEAR:
        case HISTORY_CLEAR:
        case PERCENT:
            state = '';
            break;
        case OPERATOR:
            state = operator(action.data.historyDisplay, action);
            break;
    }
    return state;
}

export default historyDisplay;
