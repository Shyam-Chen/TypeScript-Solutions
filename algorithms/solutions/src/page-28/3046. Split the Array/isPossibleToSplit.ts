type IsPossibleToSplit = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const isPossibleToSplit: IsPossibleToSplit = (nums) => {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    const currentCount = map.get(num);
    if (currentCount && currentCount > 2) return false;
  }

  return true;
};
