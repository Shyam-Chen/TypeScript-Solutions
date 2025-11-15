type MaxVowels = (s: string, k: number) => number;

/**
 * Accepted
 */
export const maxVowels: MaxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let maxVowels = 0;
  let currentVowels = 0;

  for (let i = 0; i < s.length; i++) {
    // Check if the current character is a vowel
    if (vowels.has(s[i])) currentVowels += 1;

    // If the window size exceeds k, slide the window
    if (i >= k && vowels.has(s[i - k])) currentVowels -= 1;

    // Update maxVowels
    if (i >= k - 1) maxVowels = Math.max(maxVowels, currentVowels);
  }

  return maxVowels;
};
