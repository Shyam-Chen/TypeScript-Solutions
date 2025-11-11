type MinDistance = (word1: string, word2: string) => number;

/**
 * Accepted
 */
export const minDistance: MinDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D DP array
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // If one of the strings is empty, we need to delete or insert all characters of the other string
  for (let i = 0; i <= m; i++) dp[i][0] = i; // Deleting all characters from word1
  for (let j = 0; j <= n; j++) dp[0][j] = j; // Inserting all characters to match word2

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // Characters match, no operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Choose the minimum of insert, delete, or replace operation
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1, // Insert
          dp[i - 1][j] + 1, // Delete
          dp[i - 1][j - 1] + 1, // Replace
        );
      }
    }
  }

  // The result is in the bottom-right cell
  return dp[m][n];
};
