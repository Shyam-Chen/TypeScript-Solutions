import { findKthLargest, findKthLargest2 } from './findKthLargest';

describe('215. Kth Largest Element in an Array', () => {
  test('findKthLargest', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  test('findKthLargest2', () => {
    expect(findKthLargest2([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
