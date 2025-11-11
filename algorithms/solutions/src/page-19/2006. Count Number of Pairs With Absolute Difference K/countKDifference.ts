type CountKDifference = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const countKDifference: CountKDifference = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count += 1;
      }
    }
  }

  return count;
};

/**
 * Accepted
 */
export const countKDifference2: CountKDifference = (nums, k) => {
  let count = 0;

  const numCount = new Map<number, number>();

  for (const num of nums) {
    const numPlusKCount = numCount.get(num + k) || 0;
    const numMinusKCount = numCount.get(num - k) || 0;
    if (numPlusKCount || numMinusKCount) count += numPlusKCount + numMinusKCount;

    const currentNumCount = numCount.get(num) || 0;
    numCount.set(num, currentNumCount + 1);
  }

  return count;
};
