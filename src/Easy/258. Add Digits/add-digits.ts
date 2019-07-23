export const addDigits = (num: number): number => {
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

export const addDigits2 = (num: number): number => {
  if (num < 10) return num;

  let sum = 0;

  String(num)
    .split('')
    .forEach((value: string) => {
      sum += Number(value);
    });

  return addDigits2(sum);
};

export const addDigits3 = (num: number): number => {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

export const addDigits4 = (num: number): number =>
  num === 0 ? 0 : num - 9 * Math.floor((num - 1) / 9);

export const addDigits5 = (num: number): number => 1 + ((num - 1) % 9);
