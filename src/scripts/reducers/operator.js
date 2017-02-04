import { OPERATOR } from '../actions/constants';
import helper from '../model/helper';

function operator(state = '0', action) {
    let { historyDisplay, displayValue, calculated } = action.data;
    let output = '0';
    switch (action.type) {
        case OPERATOR:
            var formatedValue = helper.commaToPoint(displayValue);
            if (helper.isNaN(formatedValue) || helper.isNumberZero(formatedValue)) {
                output = `0 ${action.value} `;
            } else {
                if (calculated === false || helper.isEmpty(historyDisplay)) {
                    output = `${historyDisplay}${displayValue} ${action.value} `;
                } else {
                    output = historyDisplay.replace(/\D $/, ` ${action.value} `);
                }
            }

            return output;
    }
    return state;
}

export default operator;
