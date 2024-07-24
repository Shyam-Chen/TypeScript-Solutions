type Intersection = (nums: number[][]) => number[];

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

/**
 * Accepted
 */
export const intersection2: Intersection = (nums) => {
  const result = [] as number[];

  const map = new Map();
  const num = nums.flat();

  for (const item of num) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  for (const [num, count] of map) {
    if (count === nums.length) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};
