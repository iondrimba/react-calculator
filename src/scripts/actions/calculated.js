import { CALCULATED } from './constants';

const calculated = (value) => {
    return {
        type: CALCULATED,
        value
    };
};

export default calculated;