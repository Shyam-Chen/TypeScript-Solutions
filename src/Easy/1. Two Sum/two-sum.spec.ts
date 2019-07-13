import { twoSum, twoSum2 } from './two-sum';

describe('1. Two Sum', () => {
  it('twoSum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('twoSum2', () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
