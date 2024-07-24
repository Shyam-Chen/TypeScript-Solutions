type MySqrt = (x: number) => number;

/**
 * Accepted
 */
export const mySqrt: MySqrt = (x) => {
  let result = x;

  while (Number(Math.abs(x - result * result).toFixed(5))) {
    result = (result + x / result) / 2;
  }

  return Math.floor(result);
};

/**
 * Accepted
 */
export const mySqrt2: MySqrt = (x) => {
  let [left, right] = [0, x];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
