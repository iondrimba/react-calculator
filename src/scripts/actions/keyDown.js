import { KEY_DOWN } from './constants';

const keyDown = (value) => {
    return {
        type: KEY_DOWN,
        value
    };
};

export default keyDown;