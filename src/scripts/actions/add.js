import { ADD } from './constants';

const add = (value, data) => {
    return {
        type: ADD,
        value,
        data
    };
};

export default add;