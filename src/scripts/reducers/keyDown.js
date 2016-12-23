import { KEY_DOWN } from '../actions/constants';

function keyDown(state = '', action) {
    switch (action.type) {
        case KEY_DOWN:
            state = action.value;
            console.log('KEY_DOWN', state);
    }
    return state;
}

export default keyDown;