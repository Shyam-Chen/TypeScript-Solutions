import { maxVowels } from './maxVowels';

describe('1456. Maximum Number of Vowels in a Substring of Given Length', () => {
  test('maxVowels', () => {
    expect(maxVowels('abciiidef', 3)).toBe(3);
    expect(maxVowels('aeiou', 2)).toBe(2);
    expect(maxVowels('leetcode', 3)).toBe(2);
  });
});
