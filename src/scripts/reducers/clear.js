import { CLEAR } from '../actions/constants';

function clear(state = '0', action) {
  switch (action.type) {
    case CLEAR:
      if (action.value) {
        return '0';
      }
  }

  return state;
}

export default clear;
