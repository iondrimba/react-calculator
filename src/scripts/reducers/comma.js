import { COMMA } from '../actions/constants';

function comma(state = '', action) {

    switch (action.type) {
        case COMMA:
            if (action.data.calculated) {
                state = `0${action.value}`;
            } else if (state.indexOf(',') === -1) {
                state = `${state}${action.value}`;
            }
            break;

    }
    return state;
}

export default comma;
