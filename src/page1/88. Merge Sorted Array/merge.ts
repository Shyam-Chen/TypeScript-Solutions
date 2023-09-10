interface Merge {
  (nums1: number[], m: number, nums2: number[], n: number): void;
}

/**
 * Accepted
 */
export const merge: Merge = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums2.length = n;

  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
