import { ADD } from '../actions/constants';
import helper from '../model/helper';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let maxDisplay = 15;
    let { historyDisplay, displayValue, calculated } = action.data;

    switch (action.type) {
        case ADD:
            if (historyDisplay) {
                commands = historyDisplay.split('');
            }

            if (commands.length > 1) {
                lastCommand = commands.pop();
            }

            if (helper.hasValue(state)) {
                if (calculated ||
                    helper.isNumberZero(state) ||
                    helper.isNumberZero(state + action.value) ||
                    (helper.isEmpty(lastCommand) && calculated)) {
                    state = action.value;
                } else {
                    state += action.value;
                }

            } else {
                state = action.value;
            }
            if (state.length > maxDisplay) {
                state = displayValue;
            }
            break;
    }
    return state;
}

export default add;
