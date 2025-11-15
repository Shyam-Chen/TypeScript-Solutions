type ReverseVowels = (s: string) => string;

/**
 * Accepted
 */
export const reverseVowels: ReverseVowels = (s) => {
  // Helper function to check if a character is a vowel
  function isVowel(char: string): boolean {
    return 'aeiouAEIOU'.includes(char);
  }

  // Convert the string to an array to allow mutable operations
  const chars = s.split('');

  let [left, right] = [0, chars.length - 1];

  // Use two pointers to find vowels from both ends of the string
  while (left < right) {
    // Move the left pointer to the next vowel
    while (left < right && !isVowel(chars[left])) {
      left += 1;
    }

    // Move the right pointer to the previous vowel
    while (left < right && !isVowel(chars[right])) {
      right -= 1;
    }

    // Swap the vowels
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left += 1;
      right -= 1;
    }
  }

  // Convert the array back to a string and return it
  return chars.join('');
};

/**
 * Accepted
 */
export const reverseVowels2: ReverseVowels = (s) => {
  // Helper function to check if a character is a vowel
  function isVowel(char: string): boolean {
    return 'aeiouAEIOU'.includes(char);
  }

  // Extract all vowels from the string
  const vowels: string[] = [];

  for (const char of s) {
    if (isVowel(char)) vowels.push(char);
  }

  // Reverse the list of vowels
  vowels.reverse();

  // Reconstruct the string, replacing vowels with reversed vowels
  const result: string[] = [];

  let vowelIndex = 0;

  for (const char of s) {
    if (isVowel(char)) {
      result.push(vowels[vowelIndex]);
      vowelIndex += 1;
    } else {
      result.push(char);
    }
  }

  // Convert the array back to a string and return it
  return result.join('');
};
