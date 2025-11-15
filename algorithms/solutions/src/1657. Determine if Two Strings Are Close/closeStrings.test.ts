import { closeStrings } from './closeStrings';

describe('1657. Determine if Two Strings Are Close', () => {
  test('closeStrings', () => {
    expect(closeStrings('abc', 'bca')).toBe(true);
    expect(closeStrings('a', 'aa')).toBe(false);
    expect(closeStrings('cabbba', 'abbccc')).toBe(true);
  });
});
