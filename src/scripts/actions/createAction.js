const createAction = (type, ...args) => {
  return Object.assign({}, { type }, ...args);
};

export default createAction;
