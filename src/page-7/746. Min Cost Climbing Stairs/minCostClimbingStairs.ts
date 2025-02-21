type MinCostClimbingStairs = (cost: number[]) => number;

/**
 * Accepted
 */
export const minCostClimbingStairs: MinCostClimbingStairs = (cost) => {
  const n = cost.length;
  const dp: number[] = Array(n + 1).fill(0);

  // Populate dp array using the state transition
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};
