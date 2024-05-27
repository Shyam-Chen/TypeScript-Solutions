export const transpose = (arr: number[][]): number[][] => {
  const result = [] as number[][];

  // two-dimensional array
  for (let i = 0; i < arr[0].length; i += 1) {
    result[i] = [];
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      result[j][i] = arr[i][j];
    }
  }

  return result;
};
