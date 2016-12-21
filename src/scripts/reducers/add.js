import { ADD } from '../actions/constants';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let result = parseInt(action.value);
    let output = state;

    switch (action.type) {
        case ADD:
            if(isNaN(parseInt(action.value, 10))) {
                return output;
            }
            if (action.history) {
                commands = action.history.split('');
            }

            if (commands.length > 1) {
                lastCommand = commands.pop();
            }

            if (isNaN(result) === false) {
                if (state) {
                    if (isNaN(lastCommand) || commands.length === 0) {
                        output = action.value;
                    } else {
                        output += action.value;
                    }

                } else {
                    output = action.value;
                }
            }
            state = output;

            return state;
    }
    return state;
}

export default add;