/**
 * 1 step from the n - 1 ladder
 * 2 steps from the n - 2 ladder
 */

export const climbStairs = (n: number): number => {
  if (n === 1 || n <= 0) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

export const climbStairs2 = (n: number): number => {
  const temp = [1, 2];

  for (let i = 2; i < n; i += 1) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }

  return temp[n - 1];
};
