type IsArraySpecial = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const isArraySpecial: IsArraySpecial = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] + nums[i + 1]) % 2 === 0) return false;
  }

  return true;
};
