import { largestAltitude } from './largestAltitude';

describe('1732. Find the Highest Altitude', () => {
  test('largestAltitude', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });
});
