type DuplicateNumbersXOR = (nums: number[]) => number;

/**
 * Accepted
 */
export const duplicateNumbersXOR: DuplicateNumbersXOR = (nums) => {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = 0;

  for (const [num, count] of map.entries()) {
    if (count === 2) result ^= num;
  }

  return result;
};
