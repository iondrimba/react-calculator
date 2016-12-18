import { ADD } from '../actions/constants';

function displayValue(state = { history: [], displayValue: 0 }, action) {

    switch (action.type) {
        case ADD:
            return {
                history: state.history,
                displayValue: state.displayValue
            };
    }
    return state;
}

export default displayValue;