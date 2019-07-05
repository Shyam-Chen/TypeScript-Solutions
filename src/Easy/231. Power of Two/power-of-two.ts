export const isPowerOfTwoS1 = (num: number): boolean => {
  for (let i = 0; i < num; i += 1) {
    if (num === Math.pow(2, i)) return true;
  }

  return false;
};

export const isPowerOfTwoS2 = (num: number): boolean => {
  let init = num;

  if (init === 1) return true;

  while (init > 2) {
    init /= 2;
  }

  return init % 2 === 0;
};

export const isPowerOfTwoS3 = (num: number): boolean => (
  (num & (num - 1)) === 0
);

export const isPowerOfTwoS4 = (n: number): boolean => (
  Number.isInteger(Math.log2(n))
);
