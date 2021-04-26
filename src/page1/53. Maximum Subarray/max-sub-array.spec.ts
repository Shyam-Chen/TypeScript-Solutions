import { maxSubArray } from './max-sub-array';

describe('53. Maximum Subarray', () => {
  it('maxSubArray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    expect(maxSubArray([1])).toEqual(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
