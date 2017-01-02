import { SWITCH_OPERATOR } from '../actions/constants';
import helper from '../model/helper';

function switchOperator(state = '', action) {
    switch (action.type) {
        case SWITCH_OPERATOR:
            if (helper.isPositiveNumber(state)) {
                state = `-${state}`;
            } else {
                state = state.replace(/-/, '');
            }

            break;
    }
    return state;
}

export default switchOperator;
