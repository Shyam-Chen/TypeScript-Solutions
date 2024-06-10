import { merge, merge2 } from './merge';

describe('88. Merge Sorted Array', () => {
  test('merge', () => {
    {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const nums2 = [2, 5, 6];
      merge(nums1, 3, nums2, 3);
      expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
    }

    {
      const nums1 = [1];
      const nums2 = [] as number[];
      merge(nums1, 1, nums2, 0);
      expect(nums1).toStrictEqual([1]);
    }

    {
      const nums1 = [0];
      const nums2 = [1];
      merge(nums1, 0, nums2, 1);
      expect(nums1).toStrictEqual([1]);
    }
  });

  test('merge2', () => {
    {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const nums2 = [2, 5, 6];
      merge2(nums1, 3, nums2, 3);
      expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
    }

    {
      const nums1 = [1];
      const nums2 = [] as number[];
      merge2(nums1, 1, nums2, 0);
      expect(nums1).toStrictEqual([1]);
    }

    {
      const nums1 = [0];
      const nums2 = [1];
      merge2(nums1, 0, nums2, 1);
      expect(nums1).toStrictEqual([1]);
    }
  });
});
