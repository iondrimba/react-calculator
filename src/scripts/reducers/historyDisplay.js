import {  CLEAR, OPERATOR, PERCENT, HISTORY_CLEAR } from '../actions/constants';
import operator from '../reducers/operator';
import percent from '../reducers/percent';

function historyDisplay(state = '', action) {
    switch (action.type) {
        case CLEAR:
        case HISTORY_CLEAR:
        case PERCENT:
            return '';
        case OPERATOR:
            return operator(action.data.historyDisplay, action);
    }
    return state;
}

export default historyDisplay;
