import { CALC, CLEAR } from '../actions/constants';

function history(state = [], action) {
    switch (action.type) {
        case CLEAR:
            state = [];
            break;
        case CALC:
            if (action.data.historyDisplay.length && action.data.calculated === false) {
                if (state.length >= 1) {
                    var h = action.data.historyDisplay.substr(action.data.historyDisplay.length - 3, 3);
                    state = [...state, `${h}${action.data.displayValue}`];
                } else {
                    state = [...state, `${action.data.historyDisplay}${action.data.displayValue}`];
                }
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
