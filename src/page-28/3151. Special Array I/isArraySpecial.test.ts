import { isArraySpecial } from './isArraySpecial';

describe('3151. Special Array I', () => {
  test('isArraySpecial', () => {
    expect(isArraySpecial([1])).toBe(true);
    expect(isArraySpecial([2, 1, 4])).toBe(true);
    expect(isArraySpecial([4, 3, 1, 6])).toBe(false);
  });
});
