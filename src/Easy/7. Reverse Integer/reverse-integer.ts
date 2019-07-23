export const reverse = (x: number): number => {
  const result = parseInt(String(x).split('').reverse().join(''), 10) * Math.sign(x);

  if (result > Math.pow(2, 31) || result < -Math.pow(2, 31) - 1) return 0;
  return result;
};
