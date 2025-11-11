import { reverseVowels, reverseVowels2 } from './reverseVowels';

describe('345. Reverse Vowels of a String', () => {
  test('reverseVowels', () => {
    expect(reverseVowels('hello')).toBe('holle');
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });

  test('reverseVowels2', () => {
    expect(reverseVowels2('hello')).toBe('holle');
    expect(reverseVowels2('leetcode')).toBe('leotcede');
  });
});
