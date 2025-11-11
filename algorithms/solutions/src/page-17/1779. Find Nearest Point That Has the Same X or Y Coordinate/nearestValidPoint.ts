type NearestValidPoint = (x: number, y: number, points: number[][]) => number;

/**
 * Accepted
 */
export const nearestValidPoint: NearestValidPoint = (x, y, points) => {
  let minDistance = Number.POSITIVE_INFINITY;
  let minIndex = -1;

  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];

    if (a === x || b === y) {
      const distance = Math.abs(a - x) + Math.abs(b - y);

      if (distance < minDistance) {
        minDistance = distance;
        minIndex = i;
      }
    }
  }

  return minIndex;
};
