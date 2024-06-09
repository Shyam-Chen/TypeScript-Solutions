import { bench } from 'vitest';

import { moveZeroes, moveZeroes2 } from './moveZeroes';

describe('283. Move Zeroes', () => {
  // fastest
  bench('moveZeroes', () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes(nums1);

    const nums2 = [0];
    moveZeroes(nums2);
  });

  bench('moveZeroes2', () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes2(nums1);

    const nums2 = [0];
    moveZeroes2(nums2);
  });
});
