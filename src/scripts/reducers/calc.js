import { CALC } from '../actions/constants';

function calc(state = '', action) {
    let history = '';
    let input = '';
    let { historyDisplay, displayValue } = action.data;

    switch (action.type) {
        case CALC:
            if (historyDisplay) {
                try {

                    history = historyDisplay.replace(/,/, '.');
                    input = displayValue.replace(/,/, '.');
                    var expressionInvalid = /[a-z]|(\{|\}|\(|\))/g.test(history);

                    if (expressionInvalid) {
                        state = '';
                    } else {
                        state = eval(`${history}${input}`).toString();

                        if (state === 'Infinity') {
                            state = '';
                        }

                        if (state.toString().indexOf('.') > 0) {
                            state = Number(state).toFixed(2).toString().replace(/\./, ',');
                        }
                    }

                } catch (err) {
                    throw new Error('Error:calc reducer ' + err.message);
                }

            }
            break;
    }
    return state;
}

export default calc;
