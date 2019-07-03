enum Morse {
  'a' = '.-',
  'b' = '-...',
  'c' = '-.-.',
  'd' = '-..',
  'e' = '.',
  'f' = '..-.',
  'g' = '--.',
  'h' = '....',
  'i' = '..',
  'j' = '.---',
  'k' = '-.-',
  'l' = '.-..',
  'm' = '--',
  'n' = '-.',
  'o' = '---',
  'p' = '.--.',
  'q' = '--.-',
  'r' = '.-.',
  's' = '...',
  't' = '-',
  'u' = '..-',
  'v' = '...-',
  'w' = '.--',
  'x' = '-..-',
  'y' = '-.--',
  'z' = '--..',
}

export const uniqueMorseRepresentations = (words: string[]): number => {
  const result = new Set();

  for (const word of words) {
    let morseWord = '';

    for (const alphabet of word) {
      morseWord += Morse[alphabet];
    }

    result.add(morseWord);
  }

  return result.size;
};
