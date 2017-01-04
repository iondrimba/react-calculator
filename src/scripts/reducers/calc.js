import { CALC } from '../actions/constants';
import helper from '../model/helper';

function calc(state = [], action) {
    let history = [...state];
    let { displayValue } = action.data;
    let expression = '';
    let result = 0;
    let output = '';
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
                    output = result.toString();

                } else {
                    output = helper.pointToComma(result.toFixed(2));
                }


            } else {
                output = displayValue;
            }

            if (output === 'Infinity') {
                output = '0';
            }

            return output;
    }
    return state;
}

export default calc;
