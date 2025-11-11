import { combinationSum3 } from './combinationSum3';

describe('216. Combination Sum III', () => {
  test('combinationSum3', () => {
    expect(combinationSum3(3, 7)).toStrictEqual([[1, 2, 4]]);

    expect(combinationSum3(3, 9)).toStrictEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);

    expect(combinationSum3(4, 1)).toStrictEqual([]);
  });
});
