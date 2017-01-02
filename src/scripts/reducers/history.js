import { CALC, CLEAR } from '../actions/constants';

function history(state = [], action) {
    let newItem = '';
    switch (action.type) {
        case CLEAR:
            state = [];
            break;
        case CALC:
            if (action.data.historyDisplay.length && action.data.calculated === false) {
                if (state.length >= 1) {
                    var operator = action.data.historyDisplay.substr(action.data.historyDisplay.length - 3, 3);
                    newItem = `${operator}${action.data.displayValue}`;
                } else {
                    newItem = `${action.data.historyDisplay}${action.data.displayValue}`;
                }

                state = [...state, newItem];

            } else if (action.data.historyDisplay.length && action.data.calculated === true) {
                state = [...state];
            } else {
                state = [];
            }
            break;
    }
    return state;
}

export default history;
