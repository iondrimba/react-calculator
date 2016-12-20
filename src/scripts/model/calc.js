class Calculator {
    add(number, adder) {
        return number + adder;
    }
    substract(number, substractor) {
        return number - substractor;
    }
    divide(number, divider) {
        if(divider===0) {
            throw new Error(`Cant´t divide ${number} to zero`);
        }
        return number / divider;
    }    
    multiple(number, multiplier) {
        return number * multiplier;
    }    
}

export default Calculator;