type MinOperations = (nums: number[]) => number;

/**
 * Accepted
 */
export const minOperations: MinOperations = (nums) => {
  let operations = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const neededIncrement = nums[i - 1] - nums[i] + 1;
      nums[i] += neededIncrement;
      operations += neededIncrement;
    }
  }

  return operations;
};
