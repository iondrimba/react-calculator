import { SWITCH_OPERATOR, CALCULATED } from '../actions/constants';

function switchOperator(state = '', action) {
    switch (action.type) {
        case SWITCH_OPERATOR:
            if (state.indexOf('-') === -1 && Number(state.replace(/,/, '.')) > 0) {
                state = `-${state}`;
            } else {
                state = Number(state.replace(/-/, '').replace(/,/, '.')).toString().replace(/\./, ',');
            }

            break;
    }
    return state;
}

export default switchOperator;
