import { ADD, CALC, CLEAR, OPERATOR } from '../actions/constants';
import operator from '../reducers/operator';

function historyDisplay(state = '', action) {
    let output = state;
    let values = [];
    let last = '';

    switch (action.type) {
        case CLEAR:
        case CALC:
            return '';
        case OPERATOR:        
            output = operator(action.data.historyDisplay, action);
            return output;
    }
    return output;
}

export default historyDisplay;