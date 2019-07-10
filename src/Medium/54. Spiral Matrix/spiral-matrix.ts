/**
 * first lap
 * 1. up: left -> right
 * 2. right: up -> down
 * 3. down: right -> left
 * 4. left: down -> up
 * second lap (-1)
 * ...
 */
export const spiralOrder = (matrix: number[][]): number[] => {
  const result = [];

  // rows, columns
  const [m, n] = [matrix.length, matrix[0].length];

  // actions
  let [up, down, left, right] = [0, m - 1, 0, n - 1];

  while (true) {
    // up
    for (let col = left; col <= right; col++) {
      result.push(matrix[up][col]);
    }

    if (++up > down) break;

    // right
    for (let row = up; row <= down; row++) {
      result.push(matrix[row][right]);
    }

    if (--right < left) break;

    // down
    for (let col = right; col >= left; col--) {
      result.push(matrix[down][col]);
    }

    if (--down < up) break;

    // left
    for (let row = down; row >= up; row--) {
      result.push(matrix[row][left]);
    }

    if (++left > right) break;
  }

  return result;
};
