interface IsPowerOfTwo {
  (num: number): boolean;
}

export const isPowerOfTwo: IsPowerOfTwo = num => {
  for (let i = 0; i < num; i += 1) {
    if (num === Math.pow(2, i)) return true;
  }

  return false;
};

export const isPowerOfTwo2: IsPowerOfTwo = num => {
  let init = num;

  if (init === 1) return true;

  while (init > 2) {
    init /= 2;
  }

  return init % 2 === 0;
};

// The fastest function
export const isPowerOfTwo3: IsPowerOfTwo = num => (num & (num - 1)) === 0;

export const isPowerOfTwo4: IsPowerOfTwo = num =>
  Number.isInteger(Math.log2(num));
