type ArraySign = (nums: number[]) => number;

/**
 * Accepted
 */
export const arraySign: ArraySign = (nums) => {
  let result = 1;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) result *= -1;
  }

  return result;
};
