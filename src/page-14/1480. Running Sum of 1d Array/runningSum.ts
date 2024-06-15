type RunningSum = (nums: number[]) => number[];

export const runningSum: RunningSum = (nums) => {
  // Initialize an array to store the running sums
  const result: number[] = [];

  let sum = 0;

  // Iterate through the nums array
  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the running sum
    sum += nums[i];

    // Store the current running sum in the result array
    result.push(sum);
  }

  return result;
};
