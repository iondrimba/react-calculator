import Calculator from '../src/scripts/model/calc.js';

describe('Calculator Tests', () => {
    it('should do add', () => {
        let calc = new Calculator();
        let result = calc.add(5, 3);
        expect(result).toEqual(8);
    });
    it('should do substract', () => {
        let calc = new Calculator();
        let result = calc.substract(5, 3);
        expect(result).toEqual(2);
    });
    it('should do multiple', () => {
        let calc = new Calculator();
        let result = calc.multiple(5, 3);
        expect(result).toEqual(15);
    });
    it('should do divide', () => {
        let calc = new Calculator();
        let result = calc.divide(8, 2);
        expect(result).toEqual(4);
    });
    it('should do throw exception when dividing to zero', () => {
        let calc = new Calculator();
        expect(function () {
            calc.divide(8, 0);
        }).toThrow();
    });
});