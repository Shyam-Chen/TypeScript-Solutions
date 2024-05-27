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
