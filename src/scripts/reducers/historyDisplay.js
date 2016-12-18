import { ADD } from '../actions/constants';
import defaultStore from '../model/initialState';

function historyDisplay(state = '', action) {
    switch (action.type) {
        case ADD:
            var output = state += action.value.toString();
            return output;
    }
    return state;
}

export default historyDisplay;