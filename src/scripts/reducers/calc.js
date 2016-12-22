import { CALC } from '../actions/constants';

function calc(state = '', action) {
    let history ='';
    let input = '';
    let output = state;
        
    switch (action.type) {        
        case CALC:
            if (action.data.historyDisplay) {
                try {
                    
                    history = action.data.historyDisplay.replace(/,/, '.');
                    input = action.data.displayValue.replace(/,/, '.');
                    output = eval(`${history}${input}`).toString();   
                    if(output.indexOf('.')>0) {                                             
                        output = Number(output).toFixed(2).toString().replace(/\./, ',');                        
                    }
                } catch (err) {
                    return output;
                }

            }
            return output;
    }
    return output;
}

export default calc;