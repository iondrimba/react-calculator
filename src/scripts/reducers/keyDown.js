import { KEY_DOWN } from '../actions/constants';

function keyDown(state = '', action) {
    switch (action.type) {
        case KEY_DOWN:
            state = action.value;
            break;
    }
    return state;
}

export default keyDown;
