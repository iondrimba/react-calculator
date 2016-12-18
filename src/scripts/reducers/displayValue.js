import { ADD } from '../actions/constants';
import defaultStore from '../model/initialState';

function displayValue(state = '' , action) {
    switch (action.type) {
        case ADD:
            return action.value;
    }
    return state;
}

export default displayValue;