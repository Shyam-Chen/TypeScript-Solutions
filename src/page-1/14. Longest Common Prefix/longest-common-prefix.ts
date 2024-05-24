interface LongestCommonPrefix {
  (strs: string[]): string;
}

/**
 * Accepted
 */
export const longestCommonPrefix: LongestCommonPrefix = (strs) => {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    const alphabet = strs[0][i];

    for (const word of strs) {
      if (word.length <= i || word[i] !== alphabet) {
        return result;
      }
    }

    result += alphabet;
  }

  return result;
};
