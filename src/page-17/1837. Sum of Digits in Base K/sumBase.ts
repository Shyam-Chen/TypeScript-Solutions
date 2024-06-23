type SumBase = (n: number, k: number) => number;

/**
 * Accepted
 */
export const sumBase: SumBase = (n, k) => {
  return n
    .toString(k)
    .split('')
    .map((val) => Number(val))
    .reduce((acc, cur) => acc + cur);
};

/**
 * Accepted
 */
export const sumBase2: SumBase = (n, k) => {
  let sum = 0;
  let current = n;

  // Convert n to base k
  while (current > 0) {
    sum += current % k; // Add the current digit to the sum
    current = Math.floor(current / k); // Update current by integer division
  }

  return sum;
};
