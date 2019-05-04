export const addDigitsS1 = (num: number): number => {
  let result = num;

  while (result >= 10) {
    let sum = 0;

    String(result)
      .split('')
      .forEach((value: string) => {
        sum += Number(value);
      });

    result = sum;
  }

  return result;
};

export const addDigitsS2 = (num: number): number => {
  if (num < 10) return num;

  let sum = 0;

  String(num)
    .split('')
    .forEach((value: string) => {
      sum += Number(value);
    });

  return addDigitsS2(sum);
};

export const addDigitsS3 = (num: number): number => {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

export const addDigitsS4 = (num: number): number => (
  num === 0 ? 0 : num - 9 * Math.floor((num - 1) / 9)
);

export const addDigitsS5 = (num: number): number => (
  1 + (num - 1) % 9
);
