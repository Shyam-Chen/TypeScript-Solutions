import { countKDifference, countKDifference2 } from './countKDifference';

describe('2006. Count Number of Pairs With Absolute Difference K', () => {
  test('countKDifference', () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
    expect(countKDifference([1, 3], 3)).toBe(0);
    expect(countKDifference([3, 2, 1, 5, 4], 2)).toBe(3);
  });

  test('countKDifference2', () => {
    expect(countKDifference2([1, 2, 2, 1], 1)).toBe(4);
    expect(countKDifference2([1, 3], 3)).toBe(0);
    expect(countKDifference2([3, 2, 1, 5, 4], 2)).toBe(3);
  });
});
