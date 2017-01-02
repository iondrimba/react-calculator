import { DEL } from '../actions/constants';
import helper from '../model/helper';

function del(state = '0', action) {
    switch (action.type) {
        case DEL:
            state = helper.removeLastChar(state);
            if (helper.isNaN(state) || helper.isNumberZero(state)) {
                state = '0';
            }
            break;
    }
    return state;
}

export default del;
