type SecondHighest = (s: string) => number;

/**
 * Accepted
 */
export const secondHighest: SecondHighest = (s) => {
  const digits = new Set<number>();

  // Extract digits from the string
  for (const char of s) {
    if (char >= '0' && char <= '9') {
      digits.add(Number.parseInt(char));
    }
  }

  // Convert set to array and sort in descending order
  const sortedDigits = Array.from(digits).sort((a, b) => b - a);

  // Return the second largest digit if it exists, otherwise return -1
  return sortedDigits.length >= 2 ? sortedDigits[1] : -1;
};
