import { decodeMessage } from './decodeMessage';

describe('2325. Decode the Message', () => {
  test('decodeMessage', () => {
    {
      const key = 'the quick brown fox jumps over the lazy dog';
      const message = 'vkbs bs t suepuv';
      const expected = 'this is a secret';
      expect(decodeMessage(key, message)).toBe(expected);
    }

    {
      const key = 'eljuxhpwnyrdgtqkviszcfmabo';
      const message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb';
      const expected = 'the five boxing wizards jump quickly';
      expect(decodeMessage(key, message)).toBe(expected);
    }
  });
});
