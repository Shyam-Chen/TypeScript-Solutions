type CountHillValley = (nums: number[]) => number;

/**
 * Accepted
 */
export const countHillValley: CountHillValley = (nums) => {
  let count = 0;

  const n = nums.length;

  for (let i = 1; i < n - 1; i++) {
    // Skip if current element is the same as the previous one
    if (nums[i] === nums[i - 1]) continue;

    let left = i - 1;
    let right = i + 1;

    // Find the closest non-equal neighbor on the left
    while (left >= 0 && nums[left] === nums[i]) {
      left -= 1;
    }

    // Find the closest non-equal neighbor on the right
    while (right < n && nums[right] === nums[i]) {
      right += 1;
    }

    // Ensure that both left and right neighbors exist
    if (left >= 0 && right < n) {
      if (nums[i] > nums[left] && nums[i] > nums[right]) {
        count += 1; // It's a hill
      } else if (nums[i] < nums[left] && nums[i] < nums[right]) {
        count += 1; // It's a valley
      }
    }
  }

  return count;
};
