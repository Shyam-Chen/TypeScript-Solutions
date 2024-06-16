type CountPrefixes = (words: string[], s: string) => number;

/**
 * Accepted
 */
export const countPrefixes: CountPrefixes = (words, s) => {
  let count = 0;

  for (const word of words) {
    if (s.startsWith(word)) count += 1;
  }

  return count;
};
