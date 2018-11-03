import { PERCENT } from '../actions/constants';
import helper from '../model/helper';

function percent(state = '0', action) {
  const { historyDisplay, displayValue } = action.data;
  let output = '0';

  switch (action.type) {
    case PERCENT:
      if (!helper.isEmpty(historyDisplay)) {
        output = eval(`${helper.commaToPoint(state)}${displayValue}`) / 100;
        output = helper.pointToComma(output);
      }

      return output;
  }

  return state;
}

export default percent;
