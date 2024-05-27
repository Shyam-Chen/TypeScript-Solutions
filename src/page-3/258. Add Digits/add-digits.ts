type AddDigits = (num: number) => number;

/**
 * Accepted
 */
export const addDigits: AddDigits = (num) => {
  let result = num;

  while (result >= 10) {
    let sum = 0;

    String(result)
      .split('')
      .forEach((value) => {
        sum += Number(value);
      });

    result = sum;
  }

  return result;
};

/**
 * Accepted
 */
export const addDigits2: AddDigits = (num) => {
  if (num < 10) return num;

  let sum = 0;

  String(num)
    .split('')
    .forEach((value) => {
      sum += Number(value);
    });

  return addDigits2(sum);
};

/**
 * Accepted
 */
export const addDigits3: AddDigits = (num) => {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

/**
 * Accepted
 */
export const addDigits4: AddDigits = (num) => {
  return num === 0 ? 0 : num - 9 * Math.floor((num - 1) / 9);
};

/**
 * Accepted
 */
export const addDigits5: AddDigits = (num) => {
  return 1 + ((num - 1) % 9);
};
