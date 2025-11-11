type UnequalTriplets = (nums: number[]) => number;

/**
 * Accepted
 */
export const unequalTriplets: UnequalTriplets = (nums) => {
  let count = 0;

  const n = nums.length;

  // Iterate over all possible triplets
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        // Check if the elements are pairwise distinct
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          count += 1;
        }
      }
    }
  }

  return count;
};
