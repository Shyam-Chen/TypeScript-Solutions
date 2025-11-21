import { assertEquals } from '@std/assert';

import { generateParenthesis } from './generateParenthesis.ts';

Deno.test('generateParenthesis', () => {
  assertEquals(generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']);
  assertEquals(generateParenthesis(1), ['()']);
});
