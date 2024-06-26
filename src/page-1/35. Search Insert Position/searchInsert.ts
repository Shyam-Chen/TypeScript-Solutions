type SearchInsert = (nums: number[], target: number) => number;

/**
 * Accepted
 */
export const searchInsert: SearchInsert = (nums, target) => {
  let index = 0;

  while (index < nums.length && nums[index] <= target) {
    if (nums[index] === target) return index;
    index += 1;
  }

  return index;
};

/**
 * Accepted
 */
export const searchInsert2: SearchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
