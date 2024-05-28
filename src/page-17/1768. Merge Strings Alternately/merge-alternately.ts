type MergeAlternately = (word1: string, word2: string) => string;

/**
 * Accepted
 */
export const mergeAlternately: MergeAlternately = (word1, word2) => {
  const array1 = Array.from(word1);
  const array2 = Array.from(word2);

  let zip = array1.flatMap((cv, i) => [cv, array2[i]]);

  if (array2.length > array1.length) {
    zip = [...zip, ...array2.slice(array1.length)];
  }

  return zip.join('');
};

/**
 * Accepted
 */
export const mergeAlternately2: MergeAlternately = (word1, word2) => {
  let result = '';

  let w1i = 0;
  let w2i = 0;

  while (w1i < word1.length || w2i < word2.length) {
    if (w1i < word1.length) {
      result += word1[w1i];
      w1i += 1;
    }

    if (w2i < word2.length) {
      result += word2[w2i];
      w2i += 1;
    }
  }

  return result;
};
