interface ConvertToBase7 {
  (num: number): string;
}

/**
 * Accepted
 *
 * Math
 */
export const convertToBase7: ConvertToBase7 = (num) => {
  if (num === 0 || num === 1) return String(num);

  let tempNum = num < 0 ? num * -1 : num;
  let result = '';

  while (tempNum > 0) {
    const residual = tempNum % 7;
    tempNum = Math.floor(tempNum / 7);
    result = String(residual) + result;
  }

  return num > 0 ? result : `-${result}`;
};

/**
 * Accepted
 */
export const convertToBase72: ConvertToBase7 = (num) => {
  return num.toString(7);
};
