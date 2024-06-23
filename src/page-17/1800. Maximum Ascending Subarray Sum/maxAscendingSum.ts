type MaxAscendingSum = (nums: number[]) => number;

/**
 * Accepted
 */
export const maxAscendingSum: MaxAscendingSum = (nums) => {
  if (nums.length === 0) return 0;

  let [maxSum, currentSum] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = nums[i];
    }
  }

  // Final check to update maxSum in case the last ascending subarray is the maximum
  maxSum = Math.max(maxSum, currentSum);

  return maxSum;
};
