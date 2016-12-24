import { SWITCH_OPERATOR, CALCULATED } from '../actions/constants';

function switchOperator(state = '', action) {
    let output = '';
    switch (action.type) {
       case SWITCH_OPERATOR:
            output = state;
            if (state.toString().indexOf('-') === -1 && Number(state.toString().replace(/,/,'.'))>0) {
                output = `-${state}`;
            }else{
                output = Number(state.toString().replace(/-/,''));
            }

            return output;
    }
    return state;
}

export default switchOperator;
