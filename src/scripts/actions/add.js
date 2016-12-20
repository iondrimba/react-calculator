import { ADD } from './constants';

const add = (value, history) => {
    return {
        type: ADD,
        value,
        history
    };
};

export default add;