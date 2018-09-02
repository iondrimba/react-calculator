import { COMMA } from '../actions/constants';

function comma(state = '', action) {
  let output = state;

  switch (action.type) {
    case COMMA:
      if (action.data.calculated) {
        output = `0${action.value}`;
      } else if (state.indexOf(',') === -1) {
        output = `${state}${action.value}`;
      }

      return output;
  }

  return state;
}

export default comma;
