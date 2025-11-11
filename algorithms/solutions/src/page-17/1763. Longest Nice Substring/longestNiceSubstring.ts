type LongestNiceSubstring = (s: string) => string;

/**
 * Accepted
 */
export const longestNiceSubstring: LongestNiceSubstring = (s) => {
  if (s.length < 2) return '';

  const charArr = Array.from(s);
  const charSet = new Set();

  // Populate the set with all characters in the string
  for (let i = 0; i < charArr.length; i++) {
    charSet.add(charArr[i]);
  }

  // Check each character to find where the string can be split
  for (let i = 0; i < charArr.length; i++) {
    const char = charArr[i];

    // If both uppercase and lowercase forms of the character are not present
    if (!charSet.has(char.toUpperCase()) || !charSet.has(char.toLowerCase())) {
      // Recursively check the substrings left and right of the current character
      const sub1 = longestNiceSubstring(s.substring(0, i));
      const sub2 = longestNiceSubstring(s.substring(i + 1));
      return sub1.length >= sub2.length ? sub1 : sub2;
    }
  }

  // If no invalid character is found, the entire string is nice
  return s;
};
