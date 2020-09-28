import { diagonalSum } from './diagonal-sum';

describe('1572. Matrix Diagonal Sum', () => {
  it('diagonalSum', () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual(25);

    expect(
      diagonalSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]),
    ).toEqual(8);

    expect(diagonalSum([[5]])).toEqual(5);
  });
});
