import { COMMA } from '../actions/constants';

function comma(state = '', action) {

    switch (action.type) {
        case COMMA:
            if (state.toString().indexOf(',') === -1) {
                state = `${state}${action.value}`;
            }

    }
    return state;
}

export default comma;