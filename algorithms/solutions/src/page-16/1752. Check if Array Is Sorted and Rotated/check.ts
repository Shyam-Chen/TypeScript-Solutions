type Check = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const check: Check = (nums) => {
  const n = nums.length;

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count += 1;
    }

    if (count > 1) return false;
  }

  return true;
};
