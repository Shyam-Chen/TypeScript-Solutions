export const hammingWeight = (n: number): number => (
  n.toString(2).split('0').join('').length
);
