type DiagonalSum = (mat: number[][]) => number;

export const diagonalSum: DiagonalSum = (mat) => {
  let result = 0;

  for (let i = 0; i < mat.length; i += 1) {
    // primary diagonal (從左上到右下) + secondary diagonal (從右上到左下)
    result += mat[i][i] + mat[i][mat.length - i - 1];
  }

  // 如果矩陣是單數
  if (mat.length % 2 === 1) {
    // 減去重複計算的中心點的數值
    result -= mat[(mat.length - 1) / 2][(mat.length - 1) / 2];
  }

  return result;
};
