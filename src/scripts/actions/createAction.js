const createAction = (type, ...args) => {

    const action = { type };
    return Object.assign({}, action, ...args);;
};

export default createAction;
