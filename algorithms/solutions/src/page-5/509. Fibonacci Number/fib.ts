type Fib = (n: number) => number;

/**
 * Accepted
 */
export const fib: Fib = (n) => {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
