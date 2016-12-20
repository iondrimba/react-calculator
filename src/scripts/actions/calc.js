import { CALC } from './constants';

const calc = (value, history) => {
    return {
        type: CALC,
        value,
        history
    };
};

export default calc;