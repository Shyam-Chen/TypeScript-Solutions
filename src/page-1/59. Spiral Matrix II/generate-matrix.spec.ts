import { generateMatrix } from './generate-matrix';

describe('59. Spiral Matrix II', () => {
  it('generateMatrix', () => {
    expect(generateMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });
});
