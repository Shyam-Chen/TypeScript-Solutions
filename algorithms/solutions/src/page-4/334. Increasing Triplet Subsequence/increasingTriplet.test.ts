import { increasingTriplet } from './increasingTriplet';

describe('334. Increasing Triplet Subsequence', () => {
  test('increasingTriplet', () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });
});
