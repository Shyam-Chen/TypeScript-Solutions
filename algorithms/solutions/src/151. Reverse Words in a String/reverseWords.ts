type ReverseWords = (s: string) => string;

/**
 * Accepted
 */
export const reverseWords: ReverseWords = (s) => {
  // Trim leading and trailing spaces
  const trimmed = s.trim();

  // Split the string by spaces to get an array of words
  const words = trimmed.split(/\s+/).filter((word) => word.length > 0);

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the reversed array into a string with a single space separator
  return reversedWords.join(' ');
};
