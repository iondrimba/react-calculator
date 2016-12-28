import { ADD } from '../actions/constants';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let result = 0;
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

            if (state.length) {
                if (calculated ||
                    Number(state + action.value) === 0 ||
                    (lastCommand.length === 0 && calculated)) {
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

            if (Number(state) === 0) {
                state = Number(state);
            }
            break;
    }
    return state;
}

export default add;
