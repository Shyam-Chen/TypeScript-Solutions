import { isPalindrome } from './palindrome-number';

describe('9. Palindrome Number', () => {
  it('isPalindrome', () => {
    expect(isPalindrome(121)).toEqual(true);
    expect(isPalindrome(-121)).toEqual(false);
    expect(isPalindrome(10)).toEqual(false);
  });
});
