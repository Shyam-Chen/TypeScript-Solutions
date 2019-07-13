export const plusOne = (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    // single digit plus one
    digits[i] += 1;

    if (digits[i] < 10) return digits;
    digits[i] = 0;
  }

  // carry
  digits.unshift(1);

  return digits;
};

export const plusOne2 = (digits: number[]): number[] => {
  const num = Number(digits.join('')) + 1;

  return Array.from(String(num))
    .map(item => Number(item));
};
