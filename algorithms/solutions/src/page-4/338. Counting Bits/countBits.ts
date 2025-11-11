type CountBits = (n: number) => number[];

/**
 * Accepted
 */
export const countBits: CountBits = (n) => {
  const result = [];

  result.push(0); // 0 0 0 0 -> 0

  for (let i = 1; i <= n; i++) {
    result[i] = (result[i] || 0) + result[i & (i - 1)] + 1;
  }

  return result;
};
