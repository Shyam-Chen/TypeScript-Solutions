import { diagonalSum } from './diagonalSum';

describe('1572. Matrix Diagonal Sum', () => {
  test('diagonalSum', () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(25);

    expect(
      diagonalSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]),
    ).toBe(8);

    expect(diagonalSum([[5]])).toBe(5);
  });
});
