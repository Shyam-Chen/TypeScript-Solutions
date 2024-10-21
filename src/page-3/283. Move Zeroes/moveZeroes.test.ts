import { moveZeroes, moveZeroes2 } from './moveZeroes';

describe('283. Move Zeroes', () => {
  test('moveZeroes', () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes(nums1);
    expect(nums1).toStrictEqual([1, 3, 12, 0, 0]);

    const nums2 = [0];
    moveZeroes(nums2);
    expect(nums2).toStrictEqual([0]);
  });

  test('moveZeroes2', () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes2(nums1);
    expect(nums1).toStrictEqual([1, 3, 12, 0, 0]);

    const nums2 = [0];
    moveZeroes2(nums2);
    expect(nums2).toStrictEqual([0]);
  });
});
