import { OPERATOR, CALCULATED } from '../actions/constants';

function operator(state = '0', action) {
    let { historyDisplay, displayValue, calculated } = action.data;

    switch (action.type) {
        case OPERATOR:
            var formatedValue = displayValue.toString().replace(/,/, '.');
            if (isNaN(Number(formatedValue)) || Number(formatedValue) === 0) {
                state = '';
            } else {
                if (calculated === false || historyDisplay.length === 0) {
                    state = `${historyDisplay}${displayValue}${action.value} `;
                } else {
                    state = historyDisplay;
                }
            }

            break;
    }
    return state;
}

export default operator;
