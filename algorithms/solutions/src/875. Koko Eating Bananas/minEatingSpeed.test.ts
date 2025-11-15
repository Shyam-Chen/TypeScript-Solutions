import { minEatingSpeed } from './minEatingSpeed';

describe('875. Koko Eating Bananas', () => {
  test('minEatingSpeed', () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
  });
});
