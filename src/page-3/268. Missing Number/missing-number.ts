interface MissingNumber {
  (nums: number[]): number;
}

/**
 * Accepted
 */
export const missingNumber: MissingNumber = (nums) => {
  const sum = nums.reduce((a, b) => a + b);
  return ((1 + nums.length) * nums.length) / 2 - sum;
};
