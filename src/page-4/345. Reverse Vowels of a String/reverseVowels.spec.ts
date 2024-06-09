import { reverseVowels } from './reverseVowels';

describe('345. Reverse Vowels of a String', () => {
  it('reverseVowels', () => {
    expect(reverseVowels('hello')).toBe('holle');
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });
});
