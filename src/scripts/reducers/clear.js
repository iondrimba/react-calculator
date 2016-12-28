import { CLEAR } from '../actions/constants';

function clear(state = 0, action) {
    switch (action.type) {
        case CLEAR:
            if (action.value) {
                state = 0;
            }
            break;
    }
    return state;
}

export default clear;
