const createAction = (type, ...args) => {
<<<<<<< HEAD
  return Object.assign({}, { type }, ...args);
=======

    const action = { type };
    return Object.assign({}, action, ...args);;
>>>>>>> ca77e5343f9dee06c5bd2dfc1c28129f6c641887
};

export default createAction;
