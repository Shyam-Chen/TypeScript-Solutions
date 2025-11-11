type LengthOfLongestSubstring = (s: string) => number;

/**
 * Accepted
 */
export const lengthOfLongestSubstring: LengthOfLongestSubstring = (s) => {
  let maxLength = 0;

  // Map to store the last index of each character
  const charMap = new Map<string, number>();

  // Initialize the left boundary of the current window
  let left = 0;

  // Iterate over each character in the string with right boundary
  for (let right = 0; right < s.length; right++) {
    const curChar = s[right]; // Current character
    const curCharIndex = charMap.get(curChar); // Get the last index of the current character

    // If the current character is found in the map and its index is within the current window
    if (typeof curCharIndex === 'number' && curCharIndex >= left) {
      // Move the left boundary to the right of the duplicate character's last index
      left = curCharIndex + 1;
    }

    // Update the map with the current character's index
    charMap.set(curChar, right);

    // Update the maximum length if the current window is larger
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
