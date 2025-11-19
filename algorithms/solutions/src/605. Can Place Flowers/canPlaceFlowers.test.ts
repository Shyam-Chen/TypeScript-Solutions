import { assertEquals } from '@std/assert';

import { canPlaceFlowers } from './canPlaceFlowers.ts';

Deno.test('canPlaceFlowers', () => {
  assertEquals(canPlaceFlowers([1, 0, 0, 0, 1], 1), true);
  assertEquals(canPlaceFlowers([1, 0, 0, 0, 1], 2), false);
});
