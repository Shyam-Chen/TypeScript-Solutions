export const singleNumber = (nums: number[]): number => (
  nums.reduce((sum, num) => sum ^ num)
);
