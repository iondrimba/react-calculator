import { CALC } from './constants';

const calc = (value, data) => {
    return {
        type: CALC,
        value,
        data
    };
};

export default calc;