type FullJustify = (words: string[], maxWidth: number) => string[];

/**
 * Accepted
 */
export const fullJustify: FullJustify = (words, maxWidth) => {
  const result: string[] = [];

  let currentLine: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (currentLength + word.length + currentLine.length > maxWidth) {
      // Distribute spaces for the current line
      const totalSpaces = maxWidth - currentLength;

      for (let i = 0; i < totalSpaces; i++) {
        currentLine[i % (currentLine.length - 1 || 1)] += ' ';
      }

      result.push(currentLine.join(''));
      currentLine = [];
      currentLength = 0;
    }

    currentLine.push(word);
    currentLength += word.length;
  }

  // Handle the last line
  result.push(
    currentLine.join(' ') + ' '.repeat(maxWidth - currentLength - currentLine.length + 1),
  );

  return result;
};
