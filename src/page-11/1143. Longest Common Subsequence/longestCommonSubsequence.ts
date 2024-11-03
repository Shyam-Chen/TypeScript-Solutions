type LongestCommonSubsequence = (text1: string, text2: string) => number;

/**
 * Accepted
 */
export const longestCommonSubsequence: LongestCommonSubsequence = (text1, text2) => {
  const m = text1.length;
  const n = text2.length;

  // Initialize a (m+1) x (n+1) DP array with zeros
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill in the DP array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the longest common subsequence is found at dp[m][n]
  return dp[m][n];
};
