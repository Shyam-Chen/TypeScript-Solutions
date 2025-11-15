import { stringify } from 'flatted';

import { productExceptSelf } from './productExceptSelf';

describe('238. Product of Array Except Self', () => {
  test('productExceptSelf', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
    expect(stringify(productExceptSelf([-1, 1, 0, -3, 3]))).toBe(stringify([0, 0, 9, 0, 0]));
  });
});
