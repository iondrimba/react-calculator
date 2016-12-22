import { CLEAR } from './constants';

const clear = (value, data) => {
    return {
        type: CLEAR,
        value,
        data
    };
};

export default clear;