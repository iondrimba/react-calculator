import { ADD } from '../actions/constants';

function add(state = '', action) {
    let commands = [];
    let lastCommand = [];
    let result = parseInt(action.value);
    let output = state;

    switch (action.type) {
        case ADD:        
            if (isNaN(parseInt(action.value, 10))) {
                return output;
            }
            if (action.data.historyDisplay) {
                commands = action.data.historyDisplay.split('');
            }

            if (commands.length > 1) {
                lastCommand = commands.pop();
            }

            if (isNaN(result) === false) {
                if (state) {
                    if (isNaN(lastCommand)  || parseInt(output, 10) === 0 || action.data.calculated) {
                        output = action.value;
                    } else {
                        output += action.value;
                    }

                } else {
                    output = action.value;
                }
            }


            return output;
    }
    return state;
}

export default add;