export const sortArrayByParity = (arr: number[]): number[] => {
  const result = [];

  for (const item of arr) {
    if (item % 2 === 0) result.push(item);
  }

  for (const item of arr) {
    if (item % 2 === 1) result.push(item);
  }

  return result;
};

export const sortArrayByParity2 = (arr: number[]): number[] =>
  arr.sort((x, y) => (x % 2) - (y % 2));
