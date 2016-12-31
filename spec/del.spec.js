import React from 'react';
import { shallow, mount, render } from 'enzyme';
import del from '../src/scripts/reducers/del';
import createAction from '../src/scripts/actions/createAction';
import * as constants from '../src/scripts/actions/constants';

describe('Del reducer tests', () => {

    let data = {};

    beforeEach(function () {
        data = {
            displayValue: '',
            historyDisplay: '',
            calculated: false
        }
    });

    it('should delete char', () => {
        let state = '20,12';
        let value = '';
        let action = createAction(constants.DEL, { value, data });
        let result = del(state, action);
        expect(result).toBe('20,1');

        result = del(result, action);
        expect(result).toBe('20,');

        result = del(result, action);
        expect(result).toBe('20');

        result = del(result, action);
        expect(result).toBe('2');

        result = del(result, action);
        expect(result).toBe('0');

        state = '-2';
        result = del(state, action);
        expect(result).toBe('0');
    });

});

