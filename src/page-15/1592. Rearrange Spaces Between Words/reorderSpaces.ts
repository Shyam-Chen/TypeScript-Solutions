type ReorderSpaces = (text: string) => string;

/**
 * Accepted
 */
export const reorderSpaces: ReorderSpaces = (text) => {
  // Trim leading and trailing spaces, then split the text into words based on one or more spaces
  const words = text.trim().split(/\s+/);

  // Count the total number of spaces in the original text
  const totalSpaces = text.split('').filter((char) => char === ' ').length;

  // Get the number of words
  const numWords = words.length;

  // If there is only one word, return the word followed by all the spaces
  if (numWords === 1) return words[0] + ' '.repeat(totalSpaces);

  // Calculate the number of spaces to put between each pair of words
  const spaceBetween = Math.floor(totalSpaces / (numWords - 1));

  // Calculate the remaining spaces that can't be evenly distributed
  const extraSpaces = totalSpaces % (numWords - 1);

  // Join the words with the calculated spaces between them and add any extra spaces at the end
  return words.join(' '.repeat(spaceBetween)) + ' '.repeat(extraSpaces);
};
