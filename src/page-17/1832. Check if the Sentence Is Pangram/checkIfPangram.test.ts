import { checkIfPangram } from './checkIfPangram';

describe('1832. Check if the Sentence Is Pangram', () => {
  test('checkIfPangram', () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
    expect(checkIfPangram('leetcode')).toBe(false);
  });
});
