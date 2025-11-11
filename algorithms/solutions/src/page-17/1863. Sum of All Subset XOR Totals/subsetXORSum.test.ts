import { subsetXORSum, subsetXORSum2 } from './subsetXORSum';

describe('1863. Sum of All Subset XOR Totals', () => {
  test('subsetXORSum', () => {
    expect(subsetXORSum([1, 3])).toBe(6);
    expect(subsetXORSum([5, 1, 6])).toBe(28);
    expect(subsetXORSum([3, 4, 5, 6, 7, 8])).toBe(480);
  });

  test('subsetXORSum2', () => {
    expect(subsetXORSum2([1, 3])).toBe(6);
    expect(subsetXORSum2([5, 1, 6])).toBe(28);
    expect(subsetXORSum2([3, 4, 5, 6, 7, 8])).toBe(480);
  });
});
