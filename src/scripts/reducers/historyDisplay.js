import { ADD, CALC, CLEAR, OPERATOR, CALCULATED, PERCENT } from '../actions/constants';
import operator from '../reducers/operator';
import percent from '../reducers/percent';

function historyDisplay(state = '', action) {
    let output = state;

    switch (action.type) {
        case CLEAR:
        case CALC:
        case PERCENT:
            return '';
        case OPERATOR:
            output = operator(action.data.historyDisplay, action);
            return output;
    }
    return output;
}

export default historyDisplay;
