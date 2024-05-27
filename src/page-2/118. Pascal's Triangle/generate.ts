type Generate = (numRows: number) => number[][];

/**
 * Accepted
 */
export const generate: Generate = (numRows) => {
  if (numRows <= 0) return [];

  const triangle = [[1]]; // first row

  if (numRows === 1) return triangle;

  for (let i = 1; i < numRows; i += 1) {
    const newRow = [1]; // first item of each row is 1
    const prevRow = triangle[i - 1];

    for (let j = 1; j <= i; j += 1) {
      const prev = prevRow[j - 1];
      const cur = prevRow[j] || 0; // last item plus 0

      newRow.push(prev + cur);
    }

    triangle.push(newRow);
  }

  return triangle;
};
