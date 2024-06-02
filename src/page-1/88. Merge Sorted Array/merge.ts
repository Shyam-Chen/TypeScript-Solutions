type Merge = (nums1: number[], m: number, nums2: number[], n: number) => void;

/**
 * Accepted
 */
export const merge: Merge = (nums1, m, nums2, n) => {
  // Truncate nums1 to only include the first m elements
  nums1.length = m;

  // Ensure nums2 only includes the first n elements
  nums2.length = n;

  // Append all elements of nums2 to nums1
  nums1.push(...nums2);

  // Sort nums1 in ascending order
  nums1.sort((a, b) => a - b);
};

/**
 * Accepted
 */
export const merge2: Merge = (nums1, m, nums2, n) => {
  // Start merging from the end of nums1
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the final position in nums1

  // Merge nums1 and nums2 from the end
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else {
      nums1[k] = nums2[j];
      j -= 1;
    }

    k -= 1;
  }
};
