export const sortArrayByParityS1 = (arr: number[]): number[] => {
  const result = [];

  arr.forEach(item => {
    if (item % 2 === 0) result.push(item);
  });

  arr.forEach(item => {
    if (item % 2 === 1) result.push(item);
  });

  return result;
};

export const sortArrayByParityS2 = (arr: number[]): number[] =>
  arr.sort((x, y) => (x % 2) - (y % 2));
