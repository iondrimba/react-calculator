import { CLEAR } from './constants';

const clear = (value, history) => {
    return {
        type: CLEAR,
        value,
        history
    };
};

export default clear;