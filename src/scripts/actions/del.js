import { DEL } from './constants';

const del = (value) => {
    return {
        type: DEL,
        value
    };
};

export default del;