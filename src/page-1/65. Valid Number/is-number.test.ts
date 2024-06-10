import { isNumber } from './is-number';

describe('65. Valid Number', () => {
  test('isNumber', () => {
    expect(isNumber('0')).toBe(true);
    expect(isNumber('e')).toBe(false);
    expect(isNumber('.')).toBe(false);

    expect(isNumber('2')).toBe(true);
    expect(isNumber('0089')).toBe(true);
    expect(isNumber('-0.1')).toBe(true);
    expect(isNumber('+3.14')).toBe(true);
    expect(isNumber('4.')).toBe(true);
    expect(isNumber('-.9')).toBe(true);
    expect(isNumber('2e10')).toBe(true);
    expect(isNumber('-90E3')).toBe(true);
    expect(isNumber('3e+7')).toBe(true);
    expect(isNumber('+6e-1')).toBe(true);
    expect(isNumber('53.5e93')).toBe(true);
    expect(isNumber('-123.456e789')).toBe(true);

    expect(isNumber('abc')).toBe(false);
    expect(isNumber('1a')).toBe(false);
    expect(isNumber('1e')).toBe(false);
    expect(isNumber('e3')).toBe(false);
    expect(isNumber('99e2.5')).toBe(false);
    expect(isNumber('--6')).toBe(false);
    expect(isNumber('-+3')).toBe(false);
    expect(isNumber('95a54e53')).toBe(false);
  });
});
