type AddDigits = (num: number) => number;

/**
 * Accepted
 */
export const addDigits: AddDigits = (num) => {
  if (num < 10) return num;

  const sum = String(num)
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  return addDigits(sum);
};

/**
 * Accepted
 */
export const addDigits2: AddDigits = (num) => {
  let result = num;

  while (result >= 10) {
    result = String(result)
      .split('')
      .map(Number)
      .reduce((sum, value) => sum + value, 0);
  }

  return result;
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
