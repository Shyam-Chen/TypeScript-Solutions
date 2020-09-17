interface CheckStraightLine {
  (coordinates: number[][]): boolean;
}

export const checkStraightLine: CheckStraightLine = coordinates => {
  // 先把第一個和第二個座標的 x 和 y 軸上的差距做為參考點
  const x = coordinates[1][0] - coordinates[0][0];
  const y = coordinates[1][1] - coordinates[0][1];

  // 迭代後續的座標
  for (let i = 2; i < coordinates.length; i += 1) {
    // 如果有不是等距離的
    if (
      (coordinates[i][0] - coordinates[0][0]) * y !==
      (coordinates[i][1] - coordinates[0][1]) * x
    ) {
      return false;
    }
  }

  return true;
};
