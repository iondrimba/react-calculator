import { DEL } from './constants';

const del = (value, data) => {
    return {
        type: DEL,
        value,
        data
    };
};

export default del;