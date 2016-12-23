import { SWITCH_OPERATOR } from './constants';

const switchOperator = (value, data) => {
    return {
        type: SWITCH_OPERATOR,
        value,
        data
    };
};

export default switchOperator;