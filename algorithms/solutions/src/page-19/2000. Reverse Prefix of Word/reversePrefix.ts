type ReversePrefix = (word: string, ch: string) => string;

/**
 * Accepted
 */
export const reversePrefix: ReversePrefix = (word, ch) => {
  const index = word.indexOf(ch);
  if (index === -1) return word;

  const arr = word.split('');
  const prefix = arr.splice(0, index + 1);
  return prefix.reverse().join('') + arr.join('');
};
