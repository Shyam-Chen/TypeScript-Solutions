import { permute } from './permute';

describe('46. Permutations', () => {
  test('permute', () => {
    expect(permute([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);

    expect(permute([0, 1])).toStrictEqual([
      [0, 1],
      [1, 0],
    ]);

    expect(permute([1])).toStrictEqual([[1]]);
  });
});
