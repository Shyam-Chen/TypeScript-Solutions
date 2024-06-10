import { lengthOfLastWord } from './length-of-last-word';

describe('58. Length of Last Word', () => {
  test('lengthOfLastWord', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });
});
