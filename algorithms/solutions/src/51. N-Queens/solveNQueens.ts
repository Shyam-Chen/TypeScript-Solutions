/**
 * Accepted
 */
export function solveNQueens(n: number): string[][] {
  const results: string[][] = [];

  // 棋盤以字串陣列表示，例如 n = 4:
  // [
  //   ‘....‘,
  //   ‘....‘,
  //   ‘....‘,
  //   ‘....‘,
  // ]
  const board = Array.from({ length: n }, () => '.'.repeat(n));

  // 用來記錄已被佔用的欄位與對角線
  const cols = new Set<number>(); // 同欄不能放
  const diag1 = new Set<number>(); // 主對角線 (/): row - col
  const diag2 = new Set<number>(); // 副對角線 (\): row + col

  function backtrack(row: number) {
    // 如果 row === n，代表 0 ~ n-1 都成功放置皇后，是一組解
    if (row === n) {
      results.push([...board]);
      return;
    }

    // 嘗試在 row 的每一個 col 欄位放置皇后
    for (let col = 0; col < n; col++) {
      // 若此 col、主對角線、副對角線已被占用，無法放 (剪枝)
      if (cols.has(col)) continue;
      if (diag1.has(row - col)) continue;
      if (diag2.has(row + col)) continue;

      // 做選擇: 在 (row, col) 擺放 Q
      const rowStr = board[row].split('');
      rowStr[col] = 'Q';
      board[row] = rowStr.join('');

      // 標記已使用
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      // 處理下一列
      backtrack(row + 1);

      // 回溯: 移除 Q，恢復成 '.'
      rowStr[col] = '.';
      board[row] = rowStr.join('');

      // 回溯: 移除記錄，恢復狀態
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);

  return results;
}
