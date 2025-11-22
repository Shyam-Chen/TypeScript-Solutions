type Generate = (numRows: number) => number[][];

/**
 * Accepted
 */
export const generate: Generate = (numRows) => {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
};
