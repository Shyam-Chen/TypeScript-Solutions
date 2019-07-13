export const longestCommonPrefix = (strs: string[]): string => {
  let result = '';

  for (let i = 0; i < strs[0].length; i += 1) {
    const alphabet = strs[0][i];

    for (const word of strs) {
      if (word.length <= i || word[i] !== alphabet) {
        return result;
      }
    }

    result += alphabet;
  }
};
