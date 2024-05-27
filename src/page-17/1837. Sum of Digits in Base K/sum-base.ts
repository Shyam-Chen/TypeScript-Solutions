type SumBase = (n: number, k: number) => number;

export const sumBase: SumBase = (n, k) => {
  return n
    .toString(k)
    .split('')
    .map((val) => Number(val))
    .reduce((acc, cur) => acc + cur);
};
