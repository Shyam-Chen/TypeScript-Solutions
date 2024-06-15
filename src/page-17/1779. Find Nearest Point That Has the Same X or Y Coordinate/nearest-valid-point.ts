type NearestValidPoint = (x: number, y: number, points: number[][]) => number;
type ManhattanDistance = (x1: number, y1: number, x2: number, y2: number) => number;

const manhattanDistance: ManhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

export const nearestValidPoint: NearestValidPoint = (x, y, points) => {
  let min = Number.POSITIVE_INFINITY;
  let result = -1;
  let count = -1;

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    count += 1;

    if (point[0] === x || point[1] === y) {
      const dist = manhattanDistance(x, y, point[0], point[1]);

      if (dist < min) {
        min = dist;
        result = count;
      }
    }
  }

  return result;
};
