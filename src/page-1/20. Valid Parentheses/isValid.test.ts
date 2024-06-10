import { isValid } from './isValid';

describe('20. Valid Parentheses', () => {
  test('isValid', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
  });
});
