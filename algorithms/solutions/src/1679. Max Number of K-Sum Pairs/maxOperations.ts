type MaxOperations = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const maxOperations: MaxOperations = (nums, k) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      operations += 1;
      left += 1;
      right -= 1;
    } else if (sum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return operations;
};

/**
 * Accepted
 */
export const maxOperations2: MaxOperations = (nums, k) => {
  const map = new Map<number, number>();

  let operations = 0;

  for (const num of nums) {
    const complement = k - num;
    const complementCount = map.get(complement) || 0;

    if (complementCount > 0) {
      map.set(complement, complementCount - 1);
      operations += 1;
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return operations;
};
