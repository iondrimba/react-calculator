import { CLEAR } from '../actions/constants';
import defaultStore from '../model/initialState';

function clear(state = '', action) {
    switch (action.type) {
        case CLEAR:
            if (action.value) {
                state = '0';
            }
            return state;
    }
    return state;
}

export default clear;