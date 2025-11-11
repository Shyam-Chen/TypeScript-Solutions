type IsPowerOfThree = (n: number) => boolean;

/**
 * Accepted
 */
export const isPowerOfThree: IsPowerOfThree = (n) => {
  return n > 0 && (Math.log10(n) / Math.log10(3)) % 1 === 0;
};

/**
 * Accepted
 */
export const isPowerOfThree2: IsPowerOfThree = (n) => {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 3 === 0) return isPowerOfThree2(n / 3);
  return false;
};

/**
 * Accepted
 */
export const isPowerOfThree3: IsPowerOfThree = (n) => {
  return /^10*$/.test(n.toString(3));
};
