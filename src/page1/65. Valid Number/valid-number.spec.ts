import { isNumber } from './valid-number';

describe('65. Valid Number', () => {
  it('isNumber', () => {
    expect(isNumber('0')).toEqual(true);
    expect(isNumber(' 0.1 ')).toEqual(true);
    expect(isNumber('abc')).toEqual(false);
    expect(isNumber('1 a')).toEqual(false);
    expect(isNumber('2e10')).toEqual(true);
    expect(isNumber(' -90e3   ')).toEqual(true);
    expect(isNumber(' 1e')).toEqual(false);
    expect(isNumber('e3')).toEqual(false);
    expect(isNumber(' 6e-1')).toEqual(true);
    expect(isNumber(' 99e2.5 ')).toEqual(false);
    expect(isNumber('53.5e93')).toEqual(true);
    expect(isNumber(' --6 ')).toEqual(false);
    expect(isNumber('-+3')).toEqual(false);
    expect(isNumber('95a54e53')).toEqual(false);
  });
});
