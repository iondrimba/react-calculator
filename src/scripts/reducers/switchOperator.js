import { SWITCH_OPERATOR } from '../actions/constants';
import helper from '../model/helper';

function switchOperator(state = '', action) {
    let output = '';
    switch (action.type) {
        case SWITCH_OPERATOR:
            if (helper.isPositiveNumber(state)) {
                output = `-${state}`;
            } else {
                output = state.replace(/-/, '');
            }

            return output;
    }
    return state;
}

export default switchOperator;
