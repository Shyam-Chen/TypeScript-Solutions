type Decrypt = (code: number[], k: number) => number[];

/**
 * Accepted
 */
export const decrypt: Decrypt = (code, k) => {
  const n = code.length;
  const result = Array(n).fill(0);

  if (k === 0) return result;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= Math.abs(k); j++) {
      let index = 0;
      if (k > 0) index = (i + j) % n;
      if (k < 0) index = (i - j + n) % n;
      sum += code[index];
    }

    result[i] = sum;
    sum = 0;
  }

  return result;
};
