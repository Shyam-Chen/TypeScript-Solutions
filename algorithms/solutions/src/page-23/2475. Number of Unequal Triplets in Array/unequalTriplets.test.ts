import { unequalTriplets } from './unequalTriplets';

describe('2475. Number of Unequal Triplets in Array', () => {
  test('unequalTriplets', () => {
    expect(unequalTriplets([4, 4, 2, 4, 3])).toBe(3);
    expect(unequalTriplets([1, 1, 1, 1, 1])).toBe(0);
  });
});
