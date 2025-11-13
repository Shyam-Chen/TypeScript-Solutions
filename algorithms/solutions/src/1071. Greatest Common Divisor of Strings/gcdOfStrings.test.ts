import { assertEquals } from '@std/assert';

import { gcdOfStrings } from './gcdOfStrings.ts';

Deno.test('gcdOfStrings', () => {
  assertEquals(gcdOfStrings('ABCABC', 'ABC'), 'ABC');
  assertEquals(gcdOfStrings('ABABAB', 'ABAB'), 'AB');
  assertEquals(gcdOfStrings('LEET', 'CODE'), '');
});
