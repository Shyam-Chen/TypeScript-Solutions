type RomanToInt = (s: string) => number;

/**
 * Accepted
 */
export const romanToInt: RomanToInt = (s) => {
  enum RomanNumerals {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
  }

  let total = 0;
  let prev = null;

  for (let i = 0; i < s.length; i++) {
    const char = s[i] as keyof typeof RomanNumerals;

    if (prev) {
      if (RomanNumerals[char] > prev) {
        total += RomanNumerals[char] - prev;
        prev = null;
      } else {
        total += prev;
        prev = RomanNumerals[char];
      }
    } else {
      prev = RomanNumerals[char];
    }
  }

  return prev ? total + prev : total;
};
