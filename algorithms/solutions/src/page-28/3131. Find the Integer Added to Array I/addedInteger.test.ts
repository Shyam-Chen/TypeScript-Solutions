import { addedInteger } from './addedInteger';

describe('3131. Find the Integer Added to Array I', () => {
  test('addedInteger', () => {
    expect(addedInteger([2, 6, 4], [9, 7, 5])).toBe(3);
    expect(addedInteger([10], [5])).toBe(-5);
    expect(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])).toBe(0);
  });
});
