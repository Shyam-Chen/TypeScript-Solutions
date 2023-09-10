interface ContainsDuplicate {
  (nums: number[]): boolean;
}

/**
 * Accepted
 */
export const containsDuplicate: ContainsDuplicate = (nums) => {
  const set = new Set([...nums]);
  return set.size !== nums.length;
};

/**
 * Accepted
 */
export const containsDuplicate2: ContainsDuplicate = (nums) => {
  let result = false;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!map.get(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  map.forEach((val) => {
    if (val !== 1) {
      result = true;
    }
  });

  return result;
};
