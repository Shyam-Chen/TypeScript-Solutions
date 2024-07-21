type FindWordsContaining = (words: string[], x: string) => number[];

/**
 * Accepted
 */
export const findWordsContaining: FindWordsContaining = (words, x) => {
  const result: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
};
