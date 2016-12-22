import { DEL } from '../actions/constants';

function del(state = '', action) {
    let output = '0';
    switch (action.type) {
        case DEL:

            if (state.length > 1) {
                output = state.substring(1, state.length);
            }
            return output;
    }
    return state;
}

export default del;