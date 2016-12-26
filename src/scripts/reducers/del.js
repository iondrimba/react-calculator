import { DEL } from '../actions/constants';

function del(state = 0, action) {
    let countRemove = 1;
    switch (action.type) {
        case DEL:
            if (Number(state) < 0) {
                countRemove = 2;
            }
            state = Number(state.toString().substring(0, state.length - countRemove));
            if (isNaN(state)) {
                state = 0;
            }
            break;
        default:
            return state;
    }
    return state;
}

export default del;
