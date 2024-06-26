type ReplaceWords = (dictionary: string[], sentence: string) => string;

/**
 * Accepted
 */
export const replaceWords: ReplaceWords = (dictionary, sentence) => {
  const result = [];

  const dicts = dictionary.sort();
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (const dict of dicts) {
      if (word.startsWith(dict)) {
        word = dict;
      }
    }

    result.push(word);
  }

  return result.join(' ');
};
