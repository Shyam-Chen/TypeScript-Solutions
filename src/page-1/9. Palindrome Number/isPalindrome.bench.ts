import { bench } from 'vitest';

import { isPalindrome, isPalindrome2 } from './isPalindrome';

describe('9. Palindrome Number', () => {
  // fastest
  bench('isPalindrome', () => {
    isPalindrome(121);
    isPalindrome(-121);
    isPalindrome(10);
  });

  bench('isPalindrome2', () => {
    isPalindrome2(121);
    isPalindrome2(-121);
    isPalindrome2(10);
  });
});
