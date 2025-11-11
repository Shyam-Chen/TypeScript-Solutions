import { findDifference } from './findDifference';

describe('2215. Find the Difference of Two Arrays', () => {
  test('findDifference', () => {
    expect(findDifference([1, 2, 3], [2, 4, 6])).toStrictEqual([
      [1, 3],
      [4, 6],
    ]);
    expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toStrictEqual([[3], []]);
  });
});
