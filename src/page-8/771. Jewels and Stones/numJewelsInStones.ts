type NumJewelsInStones = (jewels: string, stones: string) => number;

/**
 * Accepted
 */
export const numJewelsInStones: NumJewelsInStones = (jewels, stones) => {
  // Convert jewels string to a set for O(1) lookups
  const jewelSet = new Set(jewels);

  // Initialize counter for jewels found in stones
  let count = 0;

  // Iterate through each stone and check if it is a jewel
  for (const stone of stones) {
    if (jewelSet.has(stone)) count += 1;
  }

  return count;
};
