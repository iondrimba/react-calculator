import { OPERATOR } from '../actions/constants';

function operator(state = '', action) {
    let output = '0';
    switch (action.type) {
        case OPERATOR:
            output = `${action.data.historyDisplay}${action.data.displayValue}${action.value}`;
            return output;
    }
    return state;
}

export default operator;