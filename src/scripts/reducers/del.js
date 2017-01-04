import { DEL } from '../actions/constants';
import helper from '../model/helper';

function del(state = '0', action) {
    let output = '0';

    switch (action.type) {
        case DEL:
            output = helper.removeLastChar(state);
            if (helper.isNaN(output) || helper.isNumberZero(output)) {
                output = '0';
            }
            return output;
    }
    return state;
}

export default del;
