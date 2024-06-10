type FindMedianSortedArrays = (nums1: number[], nums2: number[]) => number;

/**
 * Accepted
 */
export const findMedianSortedArrays: FindMedianSortedArrays = (nums1, nums2) => {
  const total = nums1.length + nums2.length;
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  if (total % 2 === 1) return merged[(total - 1) / 2];
  return (merged[total / 2 - 1] + merged[total / 2]) / 2;
};

/**
 * Accepted
 */
export const findMedianSortedArrays2: FindMedianSortedArrays = (nums1, nums2) => {
  function findKth(nums1: number[], nums2: number[], k: number): number {
    let index1 = 0;
    let index2 = 0;
    let kth = k;

    while (true) {
      if (index1 === nums1.length) return nums2[index2 + kth - 1];
      if (index2 === nums2.length) return nums1[index1 + kth - 1];

      if (kth === 1) return Math.min(nums1[index1], nums2[index2]);

      const halfK = Math.floor(kth / 2);
      const newIndex1 = Math.min(index1 + halfK, nums1.length) - 1;
      const newIndex2 = Math.min(index2 + halfK, nums2.length) - 1;
      const pivot1 = nums1[newIndex1];
      const pivot2 = nums2[newIndex2];

      if (pivot1 <= pivot2) {
        kth -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1;
      } else {
        kth -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
  }

  const total = nums1.length + nums2.length;
  if (total % 2 === 1) return findKth(nums1, nums2, Math.floor(total / 2) + 1);
  return (findKth(nums1, nums2, total / 2) + findKth(nums1, nums2, total / 2 + 1)) / 2;
};
