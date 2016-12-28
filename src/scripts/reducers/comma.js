import { COMMA } from '../actions/constants';

function comma(state = '', action) {

    switch (action.type) {
        case COMMA:
            if (!isNaN(Number(state))) {
                state = `${state}${action.value}`;
            }
            break;

    }
    return state;
}

export default comma;
