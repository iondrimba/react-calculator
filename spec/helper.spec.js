import helper from '../src/scripts/model/helper';

describe('Helper tests', () => {

    it('isNumberZero - should return true', () => {
        let result = helper.isNumberZero('0');
        expect(result).toBe(true);

        result = helper.isNumberZero(0);
        expect(result).toBe(true);
    });

    it('isNumberZero - should return false', () => {
        let result = helper.isNumberZero('1');
        expect(result).toBe(false);

        result = helper.isNumberZero(1);
        expect(result).toBe(false);
    });

    it('hasValue - should return true', () => {
        let result = helper.hasValue('1');
        expect(result).toBe(true);

        result = helper.hasValue([1]);
        expect(result).toBe(true);
    });

    it('hasValue - should return false', () => {
        let result = helper.hasValue('');
        expect(result).toBe(false);

        result = helper.hasValue([]);
        expect(result).toBe(false);
    });


    it('isEmpty - should return true', () => {
        let result = helper.isEmpty('');
        expect(result).toBe(true);

        result = helper.isEmpty([]);
        expect(result).toBe(true);
    });

    it('isEmpty - should return false', () => {
        let result = helper.isEmpty('1');
        expect(result).toBe(false);

        result = helper.isEmpty([1]);
        expect(result).toBe(false);
    });

    it('commaToPoint - should convert string 15,23 to 15.23 ', () => {
        let result = helper.commaToPoint('15,23');
        expect(result).toBe('15.23');
    });

    it('pointToComma - should convert string 15.23 to 15,23 ', () => {
        let result = helper.pointToComma('15.23');
        expect(result).toBe('15,23');
    });

    it('isNaN - should return true for abc ', () => {
        let result = helper.isNaN('abc');
        expect(result).toBe(true);
    });

    it('isNaN - should return false', () => {
        let result = helper.isNaN('-15,23');
        expect(result).toBe(false);

        result = helper.isNaN('15.23');
        expect(result).toBe(false);

        result = helper.isNaN('-0.23');
        expect(result).toBe(false);

        result = helper.isNaN(.5);
        expect(result).toBe(false);

        result = helper.isNaN(-5.5);
        expect(result).toBe(false);
    });

    it('isInteger - should return true', () => {
        let result = helper.isInteger(1);
        expect(result).toBe(true);

        result = helper.isInteger(-1);
        expect(result).toBe(true);

        result = helper.isInteger('-1');
        expect(result).toBe(true);

        result = helper.isInteger('1');
        expect(result).toBe(true);
    });

    it('isInteger - should return false', () => {
        let result = helper.isInteger(1.5);
        expect(result).toBe(false);

        result = helper.isInteger(-1.5);
        expect(result).toBe(false);

        result = helper.isInteger('-1.5');
        expect(result).toBe(false);
    });

    it('isPositiveNumber - should return true', () => {
        let result = helper.isPositiveNumber(1.5);
        expect(result).toBe(true);

        result = helper.isPositiveNumber(1);
        expect(result).toBe(true);

        result = helper.isPositiveNumber(.5);
        expect(result).toBe(true);

        result = helper.isPositiveNumber('.5');
        expect(result).toBe(true);
    });

    it('isPositiveNumber - should return false', () => {
        let result = helper.isPositiveNumber(-1.5);
        expect(result).toBe(false);

        result = helper.isPositiveNumber('-1');
        expect(result).toBe(false);

        result = helper.isPositiveNumber(-.5);
        expect(result).toBe(false);

        result = helper.isPositiveNumber('-.5');
        expect(result).toBe(false);
    });

    it('removeLastChar - should return 123,5', () => {
        let result = helper.removeLastChar('123,58');
        expect(result).toBe('123,5');
    });

});

