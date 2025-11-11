type NumDifferentIntegers = (word: string) => number;

/**
 * Accepted
 */
export const numDifferentIntegers: NumDifferentIntegers = (word) => {
  return Array.from(
    new Set(
      word
        .replace(/\D/g, ' ') // Replace non-digits with space
        .split(' ') // Split into tokens using space as delimiter
        .filter(Boolean) // Filter out empty strings
        .map((token) => token.replace(/^0+/, '')), // Remove leading zeros
    ),
  ).length; // Return the number of unique integers
};
