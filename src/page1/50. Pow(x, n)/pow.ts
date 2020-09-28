interface Pow {
  (x: number, n: number): number;
}

export const pow: Pow = (x, n) => {
  return Number((x ** n).toFixed(5));
};

export const pow2: Pow = (x, n) => {
  let result = x;

  if (n > 0) {
    for (let index = 1; index < n; index += 1) {
      result *= x;
    }
  } else {
    for (let index = -1; index < n * -1; index += 1) {
      result /= x;
    }
  }

  return Number(result.toFixed(5));
};
