interface NumSpecial {
  (mat: number[][]): number;
}

export const numSpecial: NumSpecial = (mat) => {
  const rows = mat.length;
  const cols = mat[0].length;

  const row = Array.from({ length: rows }).fill(0) as number[];
  const col = Array.from({ length: cols }).fill(0) as number[];

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (mat[i][j] === 1) {
        row[i] += 1;
        col[j] += 1;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
        count += 1;
      }
    }
  }

  return count;
};
