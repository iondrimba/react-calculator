import { CALC } from '../actions/constants';
import helper from '../model/helper';

function calc(state = [], action) {
    let history = [...state];
    let { displayValue } = action.data;
    let expression = '';
    let result = 0;

    switch (action.type) {
        case CALC:
            if (helper.hasValue(history)) {
                if (history.length === 1) {
                    expression = helper.commaToPoint(history[0]);
                    result = eval(expression);
                } else {
                    result = history.reduce(function (a, b) {
                        expression = helper.commaToPoint(a);
                        return b = eval(eval(expression) + helper.commaToPoint(b));
                    });
                }

                if (helper.isInteger(result)) {
                    state = result.toString();

                } else {
                    state = helper.pointToComma(result.toFixed(2));
                }


            } else {
                state = displayValue;
            }

            if (state === 'Infinity') {
                state = '0';
            }

            break;
    }
    return state;
}

export default calc;
