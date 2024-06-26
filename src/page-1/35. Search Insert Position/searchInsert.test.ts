import { searchInsert, searchInsert2 } from './searchInsert';

describe('35. Search Insert Position', () => {
  test('searchInsert', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test('searchInsert2', () => {
    expect(searchInsert2([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert2([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert2([1, 3, 5, 6], 7)).toBe(4);
  });
});
