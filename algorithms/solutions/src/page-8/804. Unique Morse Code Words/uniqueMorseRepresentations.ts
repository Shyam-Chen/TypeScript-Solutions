type UniqueMorseRepresentations = (words: string[]) => number;

/**
 * Accepted
 */
export const uniqueMorseRepresentations: UniqueMorseRepresentations = (words) => {
  enum Morse {
    a = '.-',
    b = '-...',
    c = '-.-.',
    d = '-..',
    e = '.',
    f = '..-.',
    g = '--.',
    h = '....',
    i = '..',
    j = '.---',
    k = '-.-',
    l = '.-..',
    m = '--',
    n = '-.',
    o = '---',
    p = '.--.',
    q = '--.-',
    r = '.-.',
    s = '...',
    t = '-',
    u = '..-',
    v = '...-',
    w = '.--',
    x = '-..-',
    y = '-.--',
    z = '--..',
  }

  const transformations = new Set<string>();

  for (const word of words) {
    let morseCode = '';

    for (const alphabet of word) {
      morseCode += Morse[alphabet as keyof typeof Morse];
    }

    transformations.add(morseCode);
  }

  return transformations.size;
};
