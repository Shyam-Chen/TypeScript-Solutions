import { isGood, isGood2 } from './isGood';

describe('2784. Check if Array is Good', () => {
  test('isGood', () => {
    expect(isGood([2, 1, 3])).toBe(false);
    expect(isGood([1, 3, 3, 2])).toBe(true);
    expect(isGood([1, 1])).toBe(true);
    expect(isGood([3, 4, 4, 1, 2, 1])).toBe(false);
  });

  test('isGood2', () => {
    expect(isGood2([2, 1, 3])).toBe(false);
    expect(isGood2([1, 3, 3, 2])).toBe(true);
    expect(isGood2([1, 1])).toBe(true);
    expect(isGood2([3, 4, 4, 1, 2, 1])).toBe(false);
  });
});
