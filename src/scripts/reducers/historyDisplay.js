import { ADD, CALC, CLEAR, OPERATOR, CALCULATED, PERCENT } from '../actions/constants';
import operator from '../reducers/operator';
import percent from '../reducers/percent';

function historyDisplay(state = '', action) {
    switch (action.type) {
        case CLEAR:
        case CALC:
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
