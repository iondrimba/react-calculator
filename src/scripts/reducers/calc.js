import { CALC, HISTORY } from '../actions/constants';

function calc(state = [], action) {
    let history = [...state];
    switch (action.type) {
        case HISTORY:
            if (history.length) {
                if (history.length === 1) {
                    state = eval(history[0].replace(/,/g, '.')).toString().replace(/\./g, ',');
                } else {
                    state = history.reduce(function (a, b) {
                        var r = eval(a.toString().replace(/,/g, '.'));
                        return b = eval(r + b.replace(/,/g, '.'));
                    }).toString().replace(/\./g, ',');
                }
            } else {
                state = action.data.displayValue;
            }

            if (state === 'Infinity') {
                state = '0';
            }
            break;
    }
    return state;
}

export default calc;
