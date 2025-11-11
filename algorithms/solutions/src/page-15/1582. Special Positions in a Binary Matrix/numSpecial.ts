type NumSpecial = (mat: number[][]) => number;

/**
 * Accepted
 */
export const numSpecial: NumSpecial = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  const rows = Array(m).fill(0);
  const cols = Array(n).fill(0);

  // Count number of 1s in each row and each column
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rows[i] += 1;
        cols[j] += 1;
      }
    }
  }

  let specialCount = 0;

  // Check for special positions
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        specialCount += 1;
      }
    }
  }

  return specialCount;
};
