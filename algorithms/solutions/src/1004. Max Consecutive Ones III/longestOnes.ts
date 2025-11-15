type LongestOnes = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const longestOnes: LongestOnes = (nums, k) => {
  let [left, right] = [0, 0];
  let zeroCount = 0;
  let maxLength = 0;

  // Iterate through the array using the right pointer
  while (right < nums.length) {
    // If the current element is 0, increment the zero count
    if (nums[right] === 0) zeroCount += 1;

    // If the zero count exceeds k, shrink the window from the left
    while (zeroCount > k) {
      // If the element at the left pointer is 0, decrement the zero count
      if (nums[left] === 0) zeroCount -= 1;

      // Move the left pointer to the right to decrease the window size
      left += 1;
    }

    // Calculate the maximum length of the window with at most k zeros
    maxLength = Math.max(maxLength, right - left + 1);

    // Move the right pointer to the right to expand the window
    right += 1;
  }

  // Return the maximum length of the window found
  return maxLength;
};
