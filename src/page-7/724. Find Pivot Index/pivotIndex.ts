type PivotIndex = (nums: number[]) => number;

/**
 * Accepted
 */
export const pivotIndex: PivotIndex = (nums) => {
  // Calculate the total sum of the array
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  // Initialize the left sum as 0
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Check if the left sum is equal to the right sum
    if (leftSum === totalSum - leftSum - nums[i]) return i;

    // Update the left sum by adding the current element
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
};
