import { maxAscendingSum } from './max-ascending-sum';

describe('1800. Maximum Ascending Subarray Sum', () => {
  it('maxAscendingSum', () => {
    expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toEqual(65);
    expect(maxAscendingSum([10, 20, 30, 40, 50])).toEqual(150);
    expect(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])).toEqual(33);
    expect(maxAscendingSum([100, 10, 1])).toEqual(100);
  });
});
