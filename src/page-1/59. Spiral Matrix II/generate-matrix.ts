type GenerateMatrix = (n: number) => number[][];

/**
 * Accepted
 */
export const generateMatrix: GenerateMatrix = (n) => {
  const result = [] as number[][];

  // two-dimensional array
  for (let i = 0; i < n; i += 1) {
    result[i] = [];
  }

  // actions
  let [up, down, left, right, step] = [0, 0, 0, 0, 0];

  while (Number.POSITIVE_INFINITY) {
    // up (left -> right)
    for (let i = left; i < n - right; i += 1) {
      step += 1;
      result[up][i] = step;
    }

    up += 1;
    if (up + down === n) break;

    // right (up -> down)
    for (let i = up; i < n - down; i += 1) {
      step += 1;
      result[i][n - 1 - right] = step;
    }

    right += 1;
    if (left + right === n) break;

    // down (right -> left)
    for (let i = n - 1 - right; i >= left; i -= 1) {
      step += 1;
      result[n - 1 - down][i] = step;
    }

    down += 1;
    if (up + down === n) break;

    // left (down -> up)
    for (let i = n - 1 - down; i >= up; i -= 1) {
      step += 1;
      result[i][left] = step;
    }

    left += 1;
    if (left + right === n) break;
  }

  return result;
};
