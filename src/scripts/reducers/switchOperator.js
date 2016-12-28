import { SWITCH_OPERATOR, CALCULATED } from '../actions/constants';

function switchOperator(state = '', action) {
    switch (action.type) {
        case SWITCH_OPERATOR:
            if (state.toString().indexOf('-') === -1 && Number(state.toString().replace(/,/, '.')) > 0) {
                state = `-${state}`;
            } else {
                state = Number(state.toString().replace(/-/, ''));
            }

            break;
    }
    return state;
}

export default switchOperator;
