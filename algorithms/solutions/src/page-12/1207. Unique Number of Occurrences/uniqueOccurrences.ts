type UniqueOccurrences = (arr: number[]) => boolean;

/**
 * Accepted
 */
export const uniqueOccurrences: UniqueOccurrences = (arr) => {
  // Count the occurrences of each value in the array
  const countMap = new Map<number, number>();

  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Store the counts in a Set
  const countSet = new Set<number>();

  for (const count of countMap.values()) {
    countSet.add(count);
  }

  // Compare the size of the Set with the size of the Map
  return countMap.size === countSet.size;
};
