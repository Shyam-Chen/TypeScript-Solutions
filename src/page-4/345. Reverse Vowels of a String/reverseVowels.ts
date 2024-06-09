type ReverseVowels = (s: string) => string;

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
