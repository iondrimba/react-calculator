import { CLEAR } from '../actions/constants';

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