import { OPERATOR, CALCULATED } from '../actions/constants';

function operator(state = '0', action) {
    let { historyDisplay, displayValue, calculated, history } = action.data;

    switch (action.type) {
        case OPERATOR:
            var formatedValue = displayValue.toString().replace(/,/g, '.');
            if (isNaN(Number(formatedValue)) || Number(formatedValue) === 0) {
                state = `0 ${action.value} `;
            } else {
                if (calculated === false || historyDisplay.length === 0) {
                    state = `${historyDisplay}${displayValue} ${action.value} `;
                } else {
                    state = historyDisplay.replace(/\D $/, ` ${action.value} `);
                }
            }

            break;
    }
    return state;
}

export default operator;
