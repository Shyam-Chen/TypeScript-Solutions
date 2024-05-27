type GetSum = (a: number, b: number) => number;

/**
 * Accepted
 */
export const getSum: GetSum = (a, b) => {
  let [x, y] = [a, b];

  while (y !== 0) {
    const carry = x & y;
    x ^= y;
    y = carry << 1;
  }

  return x;
};

/**
 * Accepted
 */
export const getSum2: GetSum = (a, b) => {
  if (b === 0) return a;
  const carry = a & b;
  return getSum2(a ^ b, carry << 1);
};
