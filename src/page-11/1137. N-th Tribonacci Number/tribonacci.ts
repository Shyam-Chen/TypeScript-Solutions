type Tribonacci = (n: number) => number;

/**
 * Accepted
 */
export const tribonacci: Tribonacci = (n) => {
  // Base cases
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // Initialize the array with the first three values
  const T = [0, 1, 1];

  // Calculate the Tribonacci values from T3 to Tn
  for (let i = 3; i <= n; i++) {
    T[i] = T[i - 1] + T[i - 2] + T[i - 3];
  }

  // Return the n-th Tribonacci number
  return T[n];
};
