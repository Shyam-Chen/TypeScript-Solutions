import { assertEquals } from '@std/assert';

import { mergeAlternately, mergeAlternately2 } from './mergeAlternately.ts';

Deno.test('mergeAlternately', () => {
  assertEquals(mergeAlternately('abc', 'pqr'), 'apbqcr');
  assertEquals(mergeAlternately('ab', 'pqrs'), 'apbqrs');
  assertEquals(mergeAlternately('abcd', 'pq'), 'apbqcd');
});

Deno.test('mergeAlternately2', () => {
  assertEquals(mergeAlternately2('abc', 'pqr'), 'apbqcr');
  assertEquals(mergeAlternately2('ab', 'pqrs'), 'apbqrs');
  assertEquals(mergeAlternately2('abcd', 'pq'), 'apbqcd');
});
