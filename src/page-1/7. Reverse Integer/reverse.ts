type Reverse = (x: number) => number;

/**
 * Accepted
 */
export const reverse: Reverse = (x) => {
  // Get the sign of the number
  const sign = Math.sign(x);

  // Get the absolute value, convert to string, reverse it and join it back
  const reversedString = Math.abs(x).toString().split('').reverse().join('');

  // Convert the reversed string back to number and apply the original sign
  const result = Number.parseInt(reversedString, 10) * sign;

  // Check if the result is within the 32-bit signed integer range
  if (result < -(2 ** 31) || result >= 2 ** 31) return 0;

  return result;
};
