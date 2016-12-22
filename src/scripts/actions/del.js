import { DEL } from './constants';

const del = (value, history) => {
    return {
        type: DEL,
        value,
        history
    };
};

export default del;