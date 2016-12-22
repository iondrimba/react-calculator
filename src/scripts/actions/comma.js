import { COMMA } from './constants';

const comma = (value, data) => {
    return {
        type: COMMA,
        value,
        data
    };
};

export default comma;