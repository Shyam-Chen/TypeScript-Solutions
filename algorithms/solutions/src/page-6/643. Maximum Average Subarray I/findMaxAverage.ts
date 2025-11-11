type FindMaxAverage = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const findMaxAverage: FindMaxAverage = (nums, k) => {
  const n = nums.length;

  // Calculate the sum of the first 'k' elements
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];

  // This will store the maximum sum of any window of length 'k'
  let maxSum = sum;

  // Slide the window over the array from the start to the end
  for (let i = k; i < n; i++) {
    sum = sum - nums[i - k] + nums[i]; // Slide the window to the right
    maxSum = Math.max(maxSum, sum);
  }

  // Return the maximum average
  return maxSum / k;
};
