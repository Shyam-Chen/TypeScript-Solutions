import { checkIfPangram } from './check-if-pangram';

describe('1832. Check if the Sentence Is Pangram', () => {
  it('checkIfPangram', () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toEqual(true);
    expect(checkIfPangram('leetcode')).toEqual(false);
  });
});
