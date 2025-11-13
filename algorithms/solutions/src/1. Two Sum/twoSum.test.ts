import { assertEquals } from '@std/assert';

import { twoSum, twoSum2 } from './twoSum.ts';

Deno.test('twoSum', () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});

Deno.test('twoSum2', () => {
  assertEquals(twoSum2([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum2([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum2([3, 3], 6), [0, 1]);
});
