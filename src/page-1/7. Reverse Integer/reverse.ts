type Reverse = (x: number) => number;

/**
 * Accepted
 */
export const reverse: Reverse = (x) => {
  const result = Number.parseInt(String(x).split('').reverse().join(''), 10) * Math.sign(x);
  if (result < -(2 ** 31) || result > 2 ** 31) return 0;
  return result;
};
