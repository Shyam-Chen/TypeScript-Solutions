type UniquePaths = (m: number, n: number) => number;

/**
 * Accepted
 */
export const uniquePaths: UniquePaths = (m, n) => {
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  // Initialize the first row and first column
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;

  // Fill in the rest of the dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // The bottom-right corner will contain the number of unique paths
  return dp[m - 1][n - 1];
};
