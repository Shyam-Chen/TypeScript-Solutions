type TwoSum = (nums: number[], target: number) => number[];

/**
 * Accepted
 */
export const twoSum: TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

/**
 * Accepted
 */
export const twoSum2: TwoSum = (nums, target) => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // nums[i] + x = target
    // x = target − nums[i]
    const complement = map.get(target - nums[i]);
    if (complement !== undefined) return [complement, i];
    map.set(nums[i], i);
  }

  return [-1, -1];
};
