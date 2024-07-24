type IsPowerOfTwo = (n: number) => boolean;

/**
 * Accepted
 */
export const isPowerOfTwo: IsPowerOfTwo = (n) => {
  return Number.isInteger(Math.log2(n));
};

/**
 * Accepted
 */
export const isPowerOfTwo2: IsPowerOfTwo = (n) => {
  if (n === 0) return false;
  const x = BigInt(n);
  return Number((x & (x - BigInt(1))).toString()) === 0;
};

/**
 * Accepted
 */
export const isPowerOfTwo3: IsPowerOfTwo = (n) => {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 2 === 0) return isPowerOfTwo3(n / 2);
  return false;
};
