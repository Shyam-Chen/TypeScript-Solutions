import { removeStars } from './removeStars';

describe('2390. Removing Stars From a String', () => {
  test('removeStars', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe');
    expect(removeStars('erase*****')).toBe('');
  });
});
