interface MyPow {
  (x: number, n: number): number;
}

/**
 * Accepted
 */
export const myPow: MyPow = (x, n) => {
  return Number((x ** n).toFixed(5));
};

/**
 * Accepted
 */
export const myPow2: MyPow = (x, n) => {
  if (x === -1) return n % 2 === 0 ? -x : x;

  let result = 1;

  for (let i = 0; i < Math.abs(n); i++) {
    result *= x;
  }

  if (n < 0) return Number((1 / result).toFixed(5));
  return Number(result.toFixed(5));
};
