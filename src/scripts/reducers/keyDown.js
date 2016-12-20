import { KEY_DOWN } from '../actions/constants';
import defaultStore from '../model/initialState';

function keyDown(state = '', action) {
    switch (action.type) {
        case KEY_DOWN:
            return action.value;
    }
    return state;
}

export default keyDown;