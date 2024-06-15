type CommonChars = (words: string[]) => string[];

/**
 * Accepted
 */
export const commonChars: CommonChars = (words) => {
  // Create an array to store the minimum frequency of each character across all words
  const minFreq: number[] = Array(26).fill(Number.POSITIVE_INFINITY);

  for (const word of words) {
    // Create a frequency array for the current word
    const freq: number[] = Array(26).fill(0);

    // Count the frequency of each character in the current word
    for (const char of word) {
      freq[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    // Update the minimum frequency array
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }

  // Construct the result array
  const result: string[] = [];

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minFreq[i]; j++) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
    }
  }

  return result;
};

/**
 * Accepted
 */
export const commonChars2: CommonChars = (words) => {
  let result = [...words[0]];

  for (let i = 1; i < words.length; i++) {
    result = result.filter((char) => {
      const len = words[i].length;
      words[i] = words[i].replace(char, '');
      return len > words[i].length;
    });
  }

  return result;
};
