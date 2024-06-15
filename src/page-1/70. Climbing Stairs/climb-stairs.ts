type ClimbStairs = (n: number) => number;

/**
 * Accepted
 *
 * 1 step from the n - 1 ladder
 * 2 steps from the n - 2 ladder
 */
export const climbStairs: ClimbStairs = (n) => {
  const temp = [1, 2];

  for (let i = 2; i < n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }

  return temp[n - 1];
};
