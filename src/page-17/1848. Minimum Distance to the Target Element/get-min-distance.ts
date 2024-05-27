type GetMinDistance = (nums: number[], target: number, start: number) => number;

export const getMinDistance: GetMinDistance = (nums, target, start) => {
  let result = Number.POSITIVE_INFINITY;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      result = Math.min(result, Math.abs(i - start));
    }
  }

  return result;
};
