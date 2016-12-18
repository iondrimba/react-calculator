import { ADD } from './constants';

const add = (value) => {
    return {
        type: ADD,
        value
    };
};

export default add;