import { maxProductDifference } from './max-product-difference';

describe('1913. Maximum Product Difference Between Two Pairs', () => {
  test('maxProductDifference', () => {
    expect(maxProductDifference([5, 6, 2, 7, 4])).toBe(34);
    expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toBe(64);
  });
});
