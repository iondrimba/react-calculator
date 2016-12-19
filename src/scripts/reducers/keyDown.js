import { KEY_DOWN } from '../actions/constants';
import defaultStore from '../model/initialState';

function keyDown(state = 0, action) {
    switch (action.type) {
        case KEY_DOWN:
            return action.value;
    }
    return state;
}

export default keyDown;