import { wordBreak } from './wordBreak';

describe('139. Word Break', () => {
  test('wordBreak', () => {
    {
      const s = 'leetcode';
      const wordDict = ['leet', 'code'];
      expect(wordBreak(s, wordDict)).toBe(true);
    }

    {
      const s = 'applepenapple';
      const wordDict = ['apple', 'pen'];
      expect(wordBreak(s, wordDict)).toBe(true);
    }

    {
      const s = 'catsandog';
      const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
      expect(wordBreak(s, wordDict)).toBe(false);
    }
  });
});
