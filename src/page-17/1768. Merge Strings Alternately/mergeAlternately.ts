type MergeAlternately = (word1: string, word2: string) => string;

/**
 * Accepted
 */
export const mergeAlternately: MergeAlternately = (word1, word2) => {
  const chars1 = Array.from(word1);
  const chars2 = Array.from(word2);

  let mergedChars = chars1.flatMap((char, index) => [char, chars2[index]]);

  if (chars2.length > chars1.length) {
    mergedChars = [...mergedChars, ...chars2.slice(chars1.length)];
  }

  return mergedChars.join('');
};

/**
 * Accepted
 */
export const mergeAlternately2: MergeAlternately = (word1, word2) => {
  let result = '';

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < word1.length || pointer2 < word2.length) {
    if (pointer1 < word1.length) {
      result += word1[pointer1];
      pointer1 += 1;
    }

    if (pointer2 < word2.length) {
      result += word2[pointer2];
      pointer2 += 1;
    }
  }

  return result;
};
