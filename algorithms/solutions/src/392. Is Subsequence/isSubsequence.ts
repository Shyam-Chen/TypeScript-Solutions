type IsSubsequence = (s: string, t: string) => boolean;

/**
 * Accepted
 */
export const isSubsequence: IsSubsequence = (s, t) => {
  let [i, j] = [0, 0];

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i += 1;
    j += 1;
  }

  return i === s.length;
};
