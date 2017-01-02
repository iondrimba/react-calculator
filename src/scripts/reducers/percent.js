import { PERCENT } from '../actions/constants';
import helper from '../model/helper';

function percent(state = '0', action) {
    let { historyDisplay, displayValue } = action.data;

    switch (action.type) {
        case PERCENT:
            var output = eval(`${state}${displayValue}`) / 100;
            state = helper.pointToComma(output);

            if (helper.isEmpty(historyDisplay)) {
                state = '0';
            }
            break;
    }
    return state;
}

export default percent;
