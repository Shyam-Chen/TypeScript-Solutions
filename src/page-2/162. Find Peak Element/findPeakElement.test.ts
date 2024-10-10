import { findPeakElement } from './findPeakElement';

describe('162. Find Peak Element', () => {
  test('findPeakElement', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
  });
});
