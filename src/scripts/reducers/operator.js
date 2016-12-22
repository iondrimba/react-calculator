import { OPERATOR } from '../actions/constants';

function operator(state = '0', action) {
    switch (action.type) {
        case OPERATOR:
            state = `${action.data.historyDisplay}${action.data.displayValue}${action.value}`;
    }
    return state;
}

export default operator;