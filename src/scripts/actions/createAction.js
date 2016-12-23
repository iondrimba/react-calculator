const createAction = (type, ...args) => {

    let action = { type };
    action = Object.assign({}, action, ...args);

    return action;
};

export default createAction;