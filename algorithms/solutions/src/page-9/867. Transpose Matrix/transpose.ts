type Transpose = (matrix: number[][]) => number[][];

/**
 * Accepted
 */
export const transpose: Transpose = (matrix) => {
  // Get the number of rows and columns in the original matrix
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a new matrix with switched dimensions
  const transposedMatrix = Array(cols)
    .fill(0)
    .map(() => Array(rows).fill(0));

  // Iterate through the original matrix and fill the new matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};
