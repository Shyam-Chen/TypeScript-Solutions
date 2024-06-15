type GetRow = (rowIndex: number) => number[];

/**
 * Accepted
 */
export const getRow: GetRow = (rowIndex) => {
  if (rowIndex < 0) return [];

  const result = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = result.length - 1; j > 0; j--) {
      result[j] += result[j - 1];
    }

    result.push(1);
  }

  return result;
};
