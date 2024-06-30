type HammingWeight = (n: number) => number;

/**
 * Accepted
 */
export const hammingWeight: HammingWeight = (n) => {
  return n.toString(2).split('0').join('').length;
};
