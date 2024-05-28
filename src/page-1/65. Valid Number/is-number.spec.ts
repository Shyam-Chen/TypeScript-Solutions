import { isNumber } from './is-number';

describe('65. Valid Number', () => {
  it('isNumber', () => {
    expect(isNumber('0')).toEqual(true);
    expect(isNumber('e')).toEqual(false);
    expect(isNumber('.')).toEqual(false);

    expect(isNumber('2')).toEqual(true);
    expect(isNumber('0089')).toEqual(true);
    expect(isNumber('-0.1')).toEqual(true);
    expect(isNumber('+3.14')).toEqual(true);
    expect(isNumber('4.')).toEqual(true);
    expect(isNumber('-.9')).toEqual(true);
    expect(isNumber('2e10')).toEqual(true);
    expect(isNumber('-90E3')).toEqual(true);
    expect(isNumber('3e+7')).toEqual(true);
    expect(isNumber('+6e-1')).toEqual(true);
    expect(isNumber('53.5e93')).toEqual(true);
    expect(isNumber('-123.456e789')).toEqual(true);

    expect(isNumber('abc')).toEqual(false);
    expect(isNumber('1a')).toEqual(false);
    expect(isNumber('1e')).toEqual(false);
    expect(isNumber('e3')).toEqual(false);
    expect(isNumber('99e2.5')).toEqual(false);
    expect(isNumber('--6')).toEqual(false);
    expect(isNumber('-+3')).toEqual(false);
    expect(isNumber('95a54e53')).toEqual(false);
  });
});
