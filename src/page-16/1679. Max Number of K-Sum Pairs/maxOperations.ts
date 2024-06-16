type MaxOperations = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const maxOperations: MaxOperations = (nums, k) => {
  const numFreq = new Map<number, number>();

  let count = 0;

  // Count frequencies of each number in nums
  for (const num of nums) {
    if (!numFreq.has(num)) numFreq.set(num, 0);
    numFreq.set(num, (numFreq.get(num) || 0) + 1);
  }

  // Iterate through nums to find pairs
  for (const num of nums) {
    const complement = k - num;
    const numCount = numFreq.get(num) || 0;
    const complementCount = numFreq.get(complement) || 0;

    if (numCount > 0 && complementCount > 0) {
      if (num === complement) {
        // If num and complement are the same, use two of the same number
        count += Math.floor(numCount / 2);
        numFreq.set(num, 0);
      } else {
        // Otherwise, use one of each
        const minPairs = Math.min(numCount, complementCount);
        count += minPairs;
        numFreq.set(num, numCount - minPairs);
        numFreq.set(complement, complementCount - minPairs);
      }
    }
  }

  return count;
};
