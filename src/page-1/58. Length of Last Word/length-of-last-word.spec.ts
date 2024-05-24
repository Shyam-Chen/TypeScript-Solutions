import { lengthOfLastWord } from './length-of-last-word';

describe('58. Length of Last Word', () => {
  it('lengthOfLastWord', () => {
    expect(lengthOfLastWord('Hello World')).toEqual(5);
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4);
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6);
  });
});
