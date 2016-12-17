import Calculator from '../src/scripts/model/calc.js';

describe('Calculator Tests', () => {
    it('should do add correctly', () => {
        let calc = new Calculator();
        let result = calc.add(5, 3);
        expect(result).toEqual(8);
    });
});