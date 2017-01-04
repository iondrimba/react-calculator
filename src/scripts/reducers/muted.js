import { MUTED } from '../actions/constants';

function muted(state = false, action) {
    switch (action.type) {
        case MUTED:
            return action.value;

    }
    return state;
}

export default muted;
