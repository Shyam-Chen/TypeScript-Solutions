type SingleNumber = (nums: number[]) => number;

/**
 * Accepted
 */
export const singleNumber: SingleNumber = (nums) => {
  return nums.reduce((sum, num) => sum ^ num);
};
