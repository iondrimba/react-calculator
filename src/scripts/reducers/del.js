import { DEL } from '../actions/constants';

function del(state = 0, action) {
    switch (action.type) {
        case DEL:
            state = state.toString().substring(0, state.length - 1);
            if (isNaN(parseInt(state)) || Number(state) === 0) {
                state = 0;
            }
            break;
        default:
            return state;
    }
    return state;
}

export default del;
