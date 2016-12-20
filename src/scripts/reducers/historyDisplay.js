import { ADD, CALC, CLEAR } from '../actions/constants';
import defaultStore from '../model/initialState';

function historyDisplay(state = '', action) {
    let output = state;
    let values = [];
    let last = '';

    switch (action.type) {
        case CLEAR:
        case CALC:
            return '';
        case ADD:
            values = action.history.split('');
            if (state.length === 0 && isNaN(parseInt(action.value, 10))) {
                return output;
            }

            if (values.length > 0) {
                last = values.pop();
            }
            if (isNaN(parseInt(action.value)) && isNaN(parseInt(last)) && action.history.length) {
                output = state;
            } else {
                output = state += action.value.toString();
            }
            return output;
    }
    return state;
}

export default historyDisplay;