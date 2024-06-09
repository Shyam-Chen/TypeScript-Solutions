import { canPlaceFlowers } from './canPlaceFlowers';

describe('605. Can Place Flowers', () => {
  test('canPlaceFlowers', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
});
