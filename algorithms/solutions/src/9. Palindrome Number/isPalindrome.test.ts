import { isPalindrome, isPalindrome2 } from './isPalindrome';

describe('9. Palindrome Number', () => {
  test('isPalindrome', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
  });

  test('isPalindrome2', () => {
    expect(isPalindrome2(121)).toBe(true);
    expect(isPalindrome2(-121)).toBe(false);
    expect(isPalindrome2(10)).toBe(false);
  });
});
