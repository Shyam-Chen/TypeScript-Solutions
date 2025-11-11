import { generateMatrix } from './generateMatrix';

describe('59. Spiral Matrix II', () => {
  test('generateMatrix', () => {
    expect(generateMatrix(3)).toStrictEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });
});
