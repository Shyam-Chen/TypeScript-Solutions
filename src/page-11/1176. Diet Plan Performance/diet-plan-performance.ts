export const dietPlanPerformance = <T extends number>(
  calories: T[],
  k: T,
  lower: T,
  upper: T,
): number => {
  let sum = 0;

  for (let i = 0; i + k - 1 < calories.length; i += 1) {
    let temp = 0;

    for (let j = 0; j < k; j += 1) {
      temp += calories[i + j];
    }

    if (temp < lower) sum -= 1;
    if (temp > upper) sum += 1;
  }

  return sum;
};
