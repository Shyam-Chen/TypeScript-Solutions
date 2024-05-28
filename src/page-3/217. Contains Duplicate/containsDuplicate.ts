type ContainsDuplicate = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const containsDuplicate: ContainsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

/**
 * Accepted
 */
export const containsDuplicate2: ContainsDuplicate = (nums) => {
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};

/**
 * Accepted
 */
export const containsDuplicate3: ContainsDuplicate = (nums) => {
  const map = new Map<number, number>();

  for (const num of nums) {
    const currentCount = map.get(num);
    if (currentCount && currentCount === 1) return true;
    map.set(num, 1);
  }

  return false;
};
