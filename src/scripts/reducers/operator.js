import { OPERATOR } from '../actions/constants';

function operator(state = '0', action) {
    let { historyDisplay, displayValue, calculated } = action.data;

    switch (action.type) {
        case OPERATOR:
            if (calculated === false) {
                state = `${historyDisplay}${displayValue}${action.value}`;
            } else {
                state = historyDisplay;
            }
    }
    return state;
}

export default operator;
