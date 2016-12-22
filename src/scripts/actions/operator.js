import { OPERATOR } from './constants';

const operator = (value, data) => {
    return {
        type: OPERATOR,
        value,
        data
    };
};

export default operator;