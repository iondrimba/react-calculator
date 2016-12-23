const createAction = (type, ...args) => {
    
    let action = { type};
    action = Object.assign({}, action, ...args);

    return action;
};

export default createAction;

// import { ADD } from './constants';

// const createAction = (value, data) => {
//     return {
//         type: ADD,
//         value,
//         data
//     };
// };

// export default createAction;