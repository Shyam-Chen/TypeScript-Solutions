import { bench } from 'vitest';

import { twoSum, twoSum2 } from './twoSum';

describe('1. Two Sum', () => {
  // fastest
  bench('twoSum', () => {
    twoSum([2, 7, 11, 15], 9);
    twoSum([3, 2, 4], 6);
    twoSum([3, 3], 6);
  });

  bench('twoSum2', () => {
    twoSum2([2, 7, 11, 15], 9);
    twoSum2([3, 2, 4], 6);
    twoSum2([3, 3], 6);
  });
});
