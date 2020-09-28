/**
 * [2,2,1] => [010,010,001]
 * 1. 010 ^ 010 = 000
 * 2. 000 ^ 001 = 001 -> 1
 */
export const singleNumber = (nums: number[]): number =>
  nums.reduce((sum, num) => sum ^ num);
