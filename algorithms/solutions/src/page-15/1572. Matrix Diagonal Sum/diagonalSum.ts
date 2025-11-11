type DiagonalSum = (mat: number[][]) => number;

/**
 * Accepted
 */
export const diagonalSum: DiagonalSum = (mat) => {
  const n = mat.length;

  let sum = 0;

  // Iterate over each row of the matrix
  for (let i = 0; i < n; i++) {
    // Primary diagonal + Secondary diagonal
    sum += mat[i][i] + mat[i][n - i - 1];
  }

  // Adjust sum if matrix length is odd
  if (n % 2 === 1) {
    const mid = (n - 1) / 2;
    sum -= mat[mid][mid]; // Subtract the middle element counted twice
  }

  return sum;
};
