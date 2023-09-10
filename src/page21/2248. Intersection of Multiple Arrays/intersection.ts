interface Intersection {
  (nums: number[][]): number[];
}

/**
 * Accepted
 */
export const intersection: Intersection = (nums) => {
  let result = new Set<number>(nums[0]);
  let current = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      break;
    }

    for (const num of result) {
      if (new Set(nums[i + 1]).has(num)) {
        current.add(num);
      }
    }

    result = current;
    current = new Set<number>();
  }

  return Array.from(result).sort((a, b) => a - b);
};
