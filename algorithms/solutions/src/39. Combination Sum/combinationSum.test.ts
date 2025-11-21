import { combinationSum } from './combinationSum';

describe('39. Combination Sum', () => {
  test('combinationSum', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]]);

    expect(combinationSum([2, 3, 5], 8)).toStrictEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);

    expect(combinationSum([2], 1)).toStrictEqual([]);
  });
});
