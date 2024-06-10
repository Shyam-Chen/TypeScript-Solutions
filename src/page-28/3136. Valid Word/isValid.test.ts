import { isValid } from './isValid';

describe('3136. Valid Word', () => {
  test('isValid', () => {
    expect(isValid('234Adas')).toBe(true);
    expect(isValid('b3')).toBe(false);
    expect(isValid('a3$e')).toBe(false);
  });
});
