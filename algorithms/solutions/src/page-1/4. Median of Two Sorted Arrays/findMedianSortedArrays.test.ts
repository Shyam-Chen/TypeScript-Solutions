import { findMedianSortedArrays, findMedianSortedArrays2 } from './findMedianSortedArrays';

describe('4. Median of Two Sorted Arrays', () => {
  test('findMedianSortedArrays', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('findMedianSortedArrays2', () => {
    expect(findMedianSortedArrays2([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays2([1, 2], [3, 4])).toBe(2.5);
  });
});
