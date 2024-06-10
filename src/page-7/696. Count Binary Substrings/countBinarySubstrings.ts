type CountBinarySubstrings = (s: string) => number;

/**
 * Accepted
 */
export const countBinarySubstrings: CountBinarySubstrings = (s) => {
  let result = 0;
  let [prev, cur] = [0, 1];

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      cur += 1;
    } else {
      prev = cur;
      cur = 1;
    }

    if (prev >= cur) result += 1;
  }

  return result;
};
