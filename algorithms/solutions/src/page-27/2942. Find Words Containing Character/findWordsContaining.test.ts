import { findWordsContaining } from './findWordsContaining';

describe('2942. Find Words Containing Character', () => {
  test('findWordsContaining', () => {
    expect(findWordsContaining(['leet', 'code'], 'e')).toStrictEqual([0, 1]);
    expect(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'a')).toStrictEqual([0, 2]);
    expect(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'z')).toStrictEqual([]);
  });
});
