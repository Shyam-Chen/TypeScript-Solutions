type SumZero = (n: number) => number[];

/**
 * Accepted
 */
export const sumZero: SumZero = (n) => {
  const result: number[] = [];

  // Loop from 1 to n/2 and add pairs [i, -i]
  for (let i = 1; i <= n / 2; i++) {
    result.push(i, -i);
  }

  // If n is odd, push 0 to make the sum zero
  if (n % 2 !== 0) result.push(0);

  return result;
};
