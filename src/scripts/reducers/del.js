import { DEL } from '../actions/constants';

function del(state = 0, action) {
    let output = 0;
    switch (action.type) {
        case DEL:
            if (state.length > 1) {
                output = state.substring(0,state.length-1);
            }
            return output;
    }
    return state;
}

export default del;