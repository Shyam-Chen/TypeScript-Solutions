import { maxProfit, maxProfit2 } from './maxProfit';

describe('714. Best Time to Buy and Sell Stock with Transaction Fee', () => {
  test('maxProfit', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
  });

  test('maxProfit2', () => {
    expect(maxProfit2([1, 3, 2, 8, 4, 9], 2)).toBe(8);
    expect(maxProfit2([1, 3, 7, 5, 10, 3], 3)).toBe(6);
  });
});
