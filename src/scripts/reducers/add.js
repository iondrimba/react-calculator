import { ADD } from '../actions/constants';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let result = parseInt(action.value);

    switch (action.type) {
        case ADD:

            if (isNaN(parseInt(action.value, 10))) {
                return state;
            }
            if (action.data.historyDisplay) {
                commands = action.data.historyDisplay.split('');
            }

            if (commands.length > 1) {
                lastCommand = commands.pop();
            }

            if (isNaN(result) === false) {
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
            }


            return state;
    }
    return state;
}

export default add;