type CountPrefixes = (words: string[], s: string) => number;

/**
 * Accepted
 */
export const countPrefixes: CountPrefixes = (words, s) => {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    if (s.startsWith(cur)) count += 1;
  }

  return count;
};
