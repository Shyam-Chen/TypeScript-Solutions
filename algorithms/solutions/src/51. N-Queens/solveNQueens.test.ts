import { assertEquals } from '@std/assert';

import { solveNQueens } from './solveNQueens.ts';

Deno.test('solveNQueens', () => {
  assertEquals(solveNQueens(4), [
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ]);
  assertEquals(solveNQueens(1), [['Q']]);
});
