import { twoSum, twoSum2 } from './two-sum';

describe('1. Two Sum', () => {
  it('twoSum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);

    expect(twoSum([1, 2, 3], 10)).toEqual([-1, -1]);
  });

  it('twoSum2', () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum2([3, 3], 6)).toEqual([0, 1]);

    expect(twoSum2([1, 2, 3], 10)).toEqual([-1, -1]);
  });
});
