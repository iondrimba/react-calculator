import { ADD, CALC, CLEAR, OPERATOR } from '../actions/constants';
import operator from '../reducers/operator';

function historyDisplay(state = '', action) {
    switch (action.type) {
        case CLEAR:
        case CALC:
            state = '';
            break;
        case OPERATOR:        
            state = operator(action.data.historyDisplay, action);
    }
    return state;
}

export default historyDisplay;