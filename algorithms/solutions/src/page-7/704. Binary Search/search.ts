type Search = (nums: number[], target: number) => number;

/**
 * Accepted
 */
export const search: Search = (nums, target) => {
  return nums.indexOf(target);
};

/**
 * Accepted
 */
export const search2: Search = (nums, target) => {
  let [left, right] = [0, nums.length];

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      return mid;
    }
  }

  return -1;
};
