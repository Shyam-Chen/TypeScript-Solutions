export const tribonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  const T = [];

  T[0] = 0;
  T[1] = 1;
  T[2] = 1;

  for (let i = 3; i <= n; i += 1) {
    T[i] = T[i - 1] + T[i - 2] + T[i - 3];
  }

  return T[n];
};
