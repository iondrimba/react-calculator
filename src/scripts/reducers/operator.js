import { OPERATOR } from '../actions/constants';
import helper from '../model/helper';

function operator(state = '0', action) {
    let { historyDisplay, displayValue, calculated, history } = action.data;

    switch (action.type) {
        case OPERATOR:
            var formatedValue = helper.commaToPoint(displayValue);
            if (helper.isNaN(formatedValue) || helper.isNumberZero(formatedValue)) {
                state = `0 ${action.value} `;
            } else {
                if (calculated === false || helper.isEmpty(historyDisplay)) {
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
