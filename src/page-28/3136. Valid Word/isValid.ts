type IsValid = (word: string) => boolean;

/**
 * Accepted
 */
export const isValid: IsValid = (word) => {
  if (word.length < 3) return false;
  if (!/^[a-zA-Z0-9]+$/.test(word)) return false;

  const vowels = 'aeiouAEIOU';
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

  let hasVowel = false;
  let hasConsonant = false;

  for (const char of word) {
    if (vowels.includes(char)) hasVowel = true;
    if (consonants.includes(char)) hasConsonant = true;
    if (hasVowel && hasConsonant) return true;
  }

  return false;
};
