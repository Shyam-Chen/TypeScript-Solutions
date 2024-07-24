type SpiralOrder = (matrix: number[][]) => number[];

/**
 * Accepted
 */
export const spiralOrder: SpiralOrder = (matrix) => {
  const result = [];

  // rows, columns
  const [m, n] = [matrix.length, matrix[0].length];

  // actions
  let [up, down, left, right] = [0, m - 1, 0, n - 1];

  while (Number.POSITIVE_INFINITY) {
    // up
    for (let col = left; col <= right; col++) {
      result.push(matrix[up][col]);
    }

    up += 1;
    if (up > down) break;

    // right
    for (let row = up; row <= down; row++) {
      result.push(matrix[row][right]);
    }

    right -= 1;
    if (right < left) break;

    // down
    for (let col = right; col >= left; col--) {
      result.push(matrix[down][col]);
    }

    down -= 1;
    if (down < up) break;

    // left
    for (let row = down; row >= up; row--) {
      result.push(matrix[row][left]);
    }

    left += 1;
    if (left > right) break;
  }

  return result;
};
