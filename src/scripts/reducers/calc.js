import {
    CALC
} from '../actions/constants';

function calc(state = '', action) {
    let history = '';
    let input = '';
    let output = state;
    let { historyDisplay, displayValue } = action.data;

    switch (action.type) {
        case CALC:
            if (historyDisplay) {
                try {

                    history = historyDisplay.replace(/,/, '.');
                    input = displayValue.replace(/,/, '.');
                    var expressionInvalid = /[a-z]|(\{|\}|\(|\))/g.test(history);

                    if (expressionInvalid) {
                        output = 0;
                    } else {
                        output = eval(`${history}${input}`).toString();
                        if (output.indexOf('.') > 0) {
                            output = Number(output).toFixed(2).toString().replace(/\./, ',');
                        }
                    }

                } catch (err) {
                    return output;
                }

            }
            return output;
    }
    return output;
}

export default calc;
