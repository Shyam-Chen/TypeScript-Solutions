type SuccessfulPairs = (spells: number[], potions: number[], success: number) => number[];

/**
 * Accepted
 */
export const successfulPairs: SuccessfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);

  const pairs: number[] = [];

  // Helper function to perform binary search
  const binarySearch = (spell: number): number => {
    let low = 0;
    let high = potions.length - 1;

    const requiredStrength = Math.ceil(success / spell);

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (potions[mid] >= requiredStrength) {
        high = mid - 1; // Continue to search in the left half
      } else {
        low = mid + 1; // Search in the right half
      }
    }

    return low; // Low is the first index where potions[i] * spell >= success
  };

  // For each spell, find the count of successful pairs
  for (const spell of spells) {
    const index = binarySearch(spell);
    pairs.push(potions.length - index); // Successful pairs count
  }

  return pairs;
};
