import { isValid } from './isValid';

describe('20. Valid Parentheses', () => {
  test('isValid', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
  });
});
