type TwoSum = (nums: number[], target: number) => number[];

/**
 * Accepted
 */
export const twoSum: TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
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
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [-1, -1];
};
