type MinOperations = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const minOperations: MinOperations = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) count += 1;
  }

  return count;
};
