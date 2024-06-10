import { threeConsecutiveOdds } from './three-consecutive-odds';

describe('1550. Three Consecutive Odds', () => {
  test('threeConsecutiveOdds', () => {
    expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
    expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
  });
});
