import { isNumber } from './is-number';

describe('65. Valid Number', () => {
  it('isNumber', () => {
    expect(isNumber('0')).toEqual(true);
    expect(isNumber('e')).toEqual(false);
    expect(isNumber('.')).toEqual(false);

    ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53'].forEach((item) => {
      expect(isNumber(item)).toEqual(false);
    });
  });
});
