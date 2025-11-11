type LongestSubarray = (nums: number[]) => number;

/**
 * Accepted
 */
export const longestSubarray: LongestSubarray = (nums) => {
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  // Iterate through the array using the right pointer
  for (let right = 0; right < nums.length; right++) {
    // If the current element is 0, increment the zero count
    if (nums[right] === 0) zeroCount += 1;

    // If there are more than one zero in the current window, adjust the window
    while (zeroCount > 1) {
      // If the element at the left pointer is 0, decrement the zero count
      if (nums[left] === 0) zeroCount -= 1;

      // Move the left pointer to the right to reduce the window size
      left += 1;
    }

    // Update the maximum length of the window containing at most one 0
    maxLength = Math.max(maxLength, right - left);
  }

  // Return the maximum length of the subarray
  return maxLength;
};
