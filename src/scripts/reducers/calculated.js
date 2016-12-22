import { CALCULATED } from '../actions/constants';

function calculated(state = false, action) {

    switch (action.type) {
        case CALCULATED:
            state = action.value;
    }
    return state;
}

export default calculated;