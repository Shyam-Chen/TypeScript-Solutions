import { diagonalSum } from './diagonal-sum';

describe('1572. Matrix Diagonal Sum', () => {
  it('diagonalSum', () => {
    // [[1,2,3],
    //  [4,5,6],
    //  [7,8,9]]
    expect(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(25);

    // [[1,1,1,1],
    //  [1,1,1,1],
    //  [1,1,1,1],
    //  [1,1,1,1]]
    expect(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])).toEqual(8);

    // [[5]]
    expect(diagonalSum([[5]])).toEqual(5);
  });
});
