import { MUTED } from '../actions/constants';

function muted(state = false, action) {
    switch (action.type) {
        case MUTED:
            state = action.value;
            return state;

    }
    return state;
}

export default muted;
