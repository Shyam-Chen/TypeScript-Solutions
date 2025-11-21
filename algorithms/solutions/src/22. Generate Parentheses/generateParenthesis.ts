/**
 * Accepted
 */
export function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(path: string, open: number, close: number) {
    // 完成條件
    if (path.length === n * 2) {
      result.push(path);
      return;
    }

    // 可以放 '('
    if (open < n) {
      backtrack(path + '(', open + 1, close);
    }

    // 可以放 ')'
    if (close < open) {
      backtrack(path + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);

  return result;
}
