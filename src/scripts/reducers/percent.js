import { PERCENT } from '../actions/constants';

function percent(state = '0', action) {
    let { historyDisplay, displayValue, calculated } = action.data;

    switch (action.type) {
        case PERCENT:
            var output = eval(`${state}${displayValue}`) / 100;
            state = output.toString().replace(/\./g, ',');
            if (historyDisplay.length === 0) {
                state = '0';
            }
            break;
    }
    return state;
}

export default percent;
