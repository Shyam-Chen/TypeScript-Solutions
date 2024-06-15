type PlusOne = (digits: number[]) => number[];

/**
 * Accepted
 */
export const plusOne: PlusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    // single digit plus one
    digits[i] += 1;

    if (digits[i] < 10) return digits;
    digits[i] = 0;
  }

  // carry
  digits.unshift(1);

  return digits;
};

/**
 * Accepted
 */
export const plusOne2: PlusOne = (digits) => {
  const num = (BigInt(digits.join('')) + BigInt('1')).toString();
  return Array.from(String(num)).map((item) => Number(item));
};
