interface AddedInteger {
  (nums1: number[], nums2: number[]): number;
}

export const addedInteger: AddedInteger = (nums1, nums2) => {
  const sorted1 = nums1.sort((a, b) => a - b);
  const sorted2 = nums2.sort((a, b) => a - b);
  return sorted2[0] - sorted1[0];
};
