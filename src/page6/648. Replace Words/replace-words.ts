interface ReplaceWords {
  (dictionary: string[], sentence: string): string;
}

export const replaceWords: ReplaceWords = (dictionary, sentence) => {
  const result = [];

  const dicts = dictionary.sort();
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    dicts.forEach((dict) => {
      if (word.startsWith(dict)) {
        word = dict;
      }
    });

    result.push(word);
  }

  return result.join(' ');
};
