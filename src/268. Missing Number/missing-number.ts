export const missingNumber = (nums: number[]): number => {
  const sum = nums.reduce((a, b) => a + b);
  return (1 + nums.length) * nums.length / 2 - sum;
};
