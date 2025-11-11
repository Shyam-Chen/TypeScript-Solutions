import { totalCost } from './totalCost';

describe('2462. Total Cost to Hire K Workers', () => {
  test('totalCost', () => {
    expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toBe(11);
    expect(totalCost([1, 2, 4, 1], 3, 3)).toBe(4);
  });
});
