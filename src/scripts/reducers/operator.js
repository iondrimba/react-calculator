import { OPERATOR } from '../actions/constants';

function operator(state = '0', action) {
    let { historyDisplay, displayValue } = action.data;

    switch (action.type) {
        case OPERATOR:
            state = `${historyDisplay}${displayValue}${action.value}`;
    }
    return state;
}

export default operator;