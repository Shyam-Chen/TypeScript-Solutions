interface Decrypt {
  (code: number[], k: number): number[];
}

export const decrypt: Decrypt = (code, k) => {
  const result = Array.from({ length: code.length }, () => 0);
  if (k === 0) return result;

  let sum = 0;

  for (let i = 0; i < code.length; i += 1) {
    for (let j = 1; j <= Math.abs(k); j += 1) {
      let p = 0;

      if (k > 0) {
        p = (i + j + code.length) % code.length;
      }

      if (k < 0) {
        p = (i - j + code.length) % code.length;
      }

      sum += code[p];
    }

    result[i] = sum;
    sum = 0;
  }

  return result;
};
