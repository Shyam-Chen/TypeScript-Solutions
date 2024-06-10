import { getSum, getSum2 } from './get-sum';

describe('371. Sum of Two Integers', () => {
  test('getSum', () => {
    expect(getSum(1, 2)).toBe(3);
    expect(getSum(2, 3)).toBe(5);
  });

  test('getSum2', () => {
    expect(getSum2(1, 2)).toBe(3);
    expect(getSum2(2, 3)).toBe(5);
  });
});
