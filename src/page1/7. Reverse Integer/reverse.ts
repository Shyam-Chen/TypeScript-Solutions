interface Reverse {
  (x: number): number;
}

export const reverse: Reverse = (x) => {
  return parseInt(String(x).split('').reverse().join(''), 10) * Math.sign(x);
};
