type SumZero = (n: number) => number[];

export const sumZero: SumZero = (n) => {
  const result = [];

  // If n is odd, append value 0 in your returned array.
  if (n % 2 === 1) result.push(0);

  for (let i = 1; i <= n / 2; i += 1) {
    // Return an array where the values are symmetric. (+x , -x).
    result.push(i, -i);
  }

  return result;
};
