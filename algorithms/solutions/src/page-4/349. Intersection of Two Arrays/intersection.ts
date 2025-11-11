type Intersection = (nums1: number[], nums2: number[]) => number[];

/**
 * Accepted
 */
export const intersection: Intersection = (nums1, nums2) => {
  const result = new Set<number>();

  for (const num of new Set(nums1)) {
    if (new Set(nums2).has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};
