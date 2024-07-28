type CloseStrings = (word1: string, word2: string) => boolean;

/**
 * Accepted
 */
export const closeStrings: CloseStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const getCharFrequency = (word: string) => {
    const frequencyMap = new Map<string, number>();

    for (const char of word) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
  };

  const frequency1 = getCharFrequency(word1);
  const frequency2 = getCharFrequency(word2);

  const keys1 = Array.from(frequency1.keys());
  const keys2 = Array.from(frequency2.keys());

  // Both strings must have the same set of unique characters
  if (keys1.length !== keys2.length || !keys1.every((key) => keys2.includes(key))) {
    return false;
  }

  const values1 = Array.from(frequency1.values()).sort((a, b) => a - b);
  const values2 = Array.from(frequency2.values()).sort((a, b) => a - b);

  // Both strings must have the same sorted frequencies of characters
  return values1.every((value, index) => value === values2[index]);
};
