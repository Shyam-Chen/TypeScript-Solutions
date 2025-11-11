type NumTilings = (n: number) => number;

/**
 * Accepted
 */
export const numTilings: NumTilings = (n) => {
  const MOD = 1_000_000_007;

  // Create a DP array to store the number of ways
  const dp: number[] = Array(n + 1).fill(0);
  dp[0] = 1; // 1 way to tile a 2 x 0 board (empty board)
  dp[1] = 1; // 1 way to tile a 2 x 1 board
  dp[2] = 2; // 2 ways to tile a 2 x 2 board

  // Fill the dp array for all values from 3 to n
  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
  }

  // The result is stored in dp[n]
  return dp[n];
};
