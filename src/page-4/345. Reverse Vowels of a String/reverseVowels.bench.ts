import { bench } from 'vitest';

import { reverseVowels, reverseVowels2 } from './reverseVowels';

describe('345. Reverse Vowels of a String', () => {
  // fastest
  bench('reverseVowels', () => {
    reverseVowels('hello');
    reverseVowels('leetcode');
  });

  bench('reverseVowels2', () => {
    reverseVowels2('hello');
    reverseVowels2('leetcode');
  });
});
