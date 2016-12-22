import { CALC } from '../actions/constants';

function calc(state = '', action) {
    switch (action.type) {        
        case CALC:
            if (action.data.historyDisplay) {
                try {
                    state = eval(`${action.data.historyDisplay}${action.data.displayValue}`).toString();
                } catch (err) {
                    return state;
                }

            }
            return state;
    }
    return state;
}

export default calc;