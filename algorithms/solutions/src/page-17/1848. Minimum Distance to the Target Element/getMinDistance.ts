type GetMinDistance = (nums: number[], target: number, start: number) => number;

/**
 * Accepted
 */
export const getMinDistance: GetMinDistance = (nums, target, start) => {
  let minDiff = Number.POSITIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      minDiff = Math.min(minDiff, Math.abs(i - start));
    }
  }

  return minDiff;
};
