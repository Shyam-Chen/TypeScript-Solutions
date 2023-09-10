interface RomanToInt {
  (s: string): number;
}

/**
 * Accepted
 */
export const romanToInt: RomanToInt = (s) => {
  enum RomanNumerals {
    'I' = 1,
    'V' = 5,
    'X' = 10,
    'L' = 50,
    'C' = 100,
    'D' = 500,
    'M' = 1000,
  }

  let total = 0;
  let prev = null;

  for (let i = 0; i < s.length; i += 1) {
    if (prev) {
      if (RomanNumerals[s[i]] > prev) {
        total += RomanNumerals[s[i]] - prev;
        prev = null;
      } else {
        total += prev;
        prev = RomanNumerals[s[i]];
      }
    } else {
      prev = RomanNumerals[s[i]];
    }
  }

  return prev ? total + prev : total;
};
