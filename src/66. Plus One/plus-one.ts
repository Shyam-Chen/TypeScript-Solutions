export const plusOneS1 = (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    // Ones plus one (個位數加一)
    digits[i] += 1;

    // Return digit less than 10
    if (digits[i] < 10) return digits;

    // Digit is greater than 10
    digits[i] = 0;
  }

  // Carry (進位)
  digits.unshift(1);

  return digits;
};

export const plusOneS2 = (digits: number[]): number[] => {
  const num = Number(digits.join('')) + 1;

  return Array.from(String(num))
    .map(item => Number(item));
};
