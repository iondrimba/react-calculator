import { CALC } from '../actions/constants';

function calc(state = '', action) {
    switch (action.type) {
        case CALC:
            if (action.history) {
                
                try {
                    state = eval(action.history);
                } catch (err) {
                    return state;
                }

            }
            return state;
    }
    return state;
}

export default calc;