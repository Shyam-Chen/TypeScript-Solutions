export const getSum = (a: number, b: number): number => {
  let [x, y] = [a, b];

  while (y !== 0) {
    const carry = x & y;

    x = x ^ y;
    y = carry << 1;
  }

  return x;
};

export const getSum2 = (a: number, b: number): number => {
  if (b === 0) return a;
  const carry = a & b;
  return getSum2(a ^ b, carry << 1);
};
