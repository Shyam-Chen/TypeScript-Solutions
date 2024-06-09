import { reverseWords } from './reverseWords';

describe('151. Reverse Words in a String', () => {
  test('reverseWords', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
    expect(reverseWords('  hello world  ')).toBe('world hello');
    expect(reverseWords('a good   example')).toBe('example good a');
  });
});
