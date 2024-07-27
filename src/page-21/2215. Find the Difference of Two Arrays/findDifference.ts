type FindDifference = (nums1: number[], nums2: number[]) => number[][];

/**
 * Accepted
 */
export const findDifference: FindDifference = (nums1, nums2) => {
  // Create sets from nums1 and nums2
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Find distinct elements in nums1 not in nums2
  const distinctNums1 = Array.from(set1).filter((num) => !set2.has(num));

  // Find distinct elements in nums2 not in nums1
  const distinctNums2 = Array.from(set2).filter((num) => !set1.has(num));

  return [distinctNums1, distinctNums2];
};
