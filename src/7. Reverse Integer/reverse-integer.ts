export const reverse = (x: number): number => {
  const res = parseInt(String(x).split('').reverse().join(''), 10) * Math.sign(x);

  if (res > Math.pow(2, 31) || res < -Math.pow(2, 31) - 1) return 0;
  return res;
};
