type CountGoodSubstrings = (s: string) => number;

/**
 * Accepted
 */
export const countGoodSubstrings: CountGoodSubstrings = (s) => {
  let count = 0;

  for (let i = 0; i <= s.length - 3; i++) {
    const substring = s.substring(i, i + 3);
    const set = new Set(substring);
    if (set.size === 3) count += 1;
  }

  return count;
};
