import { ADD } from '../actions/constants';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let result = 0;

    switch (action.type) {
        case ADD:
            if (action.data.historyDisplay) {
                commands = action.data.historyDisplay.split('');
            }

            if (commands.length > 1) {
                lastCommand = commands.pop();
            }

            if (state.length) {
                if (action.data.calculated ||
                    Number(state + action.value) === 0 ||
                    (lastCommand.length === 0 && action.data.calculated)) {
                    state = action.value;
                } else {
                    state += action.value;
                }

            } else {
                state = action.value;
            }
            if(Number(state)===0) {
                state = Number(state);
            }

            return state;
    }
    return state;
}

export default add;
