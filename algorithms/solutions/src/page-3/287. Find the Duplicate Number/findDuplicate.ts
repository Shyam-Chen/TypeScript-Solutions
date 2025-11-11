type FindDuplicate = (nums: number[]) => number;

/**
 * Accepted
 */
export const findDuplicate: FindDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  // Step 1: Detect cycle using Fast and Slow Pointers
  do {
    slow = nums[slow]; // Move slow by 1 step
    fast = nums[nums[fast]]; // Move fast by 2 steps
  } while (slow !== fast);

  // Step 2: Find the entry point of the cycle (which is the duplicate number)
  slow = nums[0]; // Reset slow to the start

  while (slow !== fast) {
    slow = nums[slow]; // Move slow by 1 step
    fast = nums[fast]; // Move fast by 1 step
  }

  return slow; // The duplicate number
};
