enum Roman {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

export const romanToInt = (str: string): number => {
  let total = 0;
  let prev = null;

  for (let i = 0; i < str.length; i += 1) {
    if (prev) {
      if (Roman[str[i]] > prev) {
        total += (Roman[str[i]] - prev);
        prev = null;
      } else {
        total += prev;
        prev = Roman[str[i]];
      }
    } else {
      prev = Roman[str[i]];
    }
  }

  return prev ? total + prev : total;
};
