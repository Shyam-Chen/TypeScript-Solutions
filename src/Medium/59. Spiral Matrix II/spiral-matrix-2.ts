export const generateMatrix = (n: number): number[][] => {
  const result = [];

  // two-dimensional array
  for (let i = 0; i < n; i += 1) {
    result[i] = [];
  }

  // actions
  let [up, down, left, right, step] = [0, 0, 0, 0, 0];

  while (true) {
    // up
    for (let i = left; i < n - right; i += 1) {
      step += 1;
      result[up][i] = step;
    }

    up += 1;
    if (up + down === n) break;

    // right
    for (let i = up; i < n - down; i += 1) {
      step += 1;
      result[i][n - 1 - right] = step;
    }

    right += 1;
    if (left + right === n) break;

    // down
    for (let i = n - 1 - right; i >= left; i -= 1) {
      step += 1;
      result[n - 1 - down][i] = step;
    }

    down += 1;
    if (up + down === n) break;

    // left
    for (let i = n - 1 - down; i >= up; i -= 1) {
      step += 1;
      result[i][left] = step;
    }

    left += 1;
    if (left + right === n) break;
  }

  return result;
};
