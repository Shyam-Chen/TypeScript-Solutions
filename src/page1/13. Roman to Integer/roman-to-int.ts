interface RomanToInt {
  (str: string): number;
}

enum RomanNumerals {
  'I' = 1,
  'V' = 5,
  'X' = 10,
  'L' = 50,
  'C' = 100,
  'D' = 500,
  'M' = 1000,
}

export const romanToInt: RomanToInt = (str) => {
  let total = 0;
  let prev = null;

  for (let i = 0; i < str.length; i += 1) {
    if (prev) {
      if (RomanNumerals[str[i]] > prev) {
        total += RomanNumerals[str[i]] - prev;
        prev = null;
      } else {
        total += prev;
        prev = RomanNumerals[str[i]];
      }
    } else {
      prev = RomanNumerals[str[i]];
    }
  }

  return prev ? total + prev : total;
};
