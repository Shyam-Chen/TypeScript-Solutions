import { nearestValidPoint } from './nearest-valid-point';

describe('1779. Find Nearest Point That Has the Same X or Y Coordinate', () => {
  test('nearestValidPoint', () => {
    expect(
      nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
      ]),
    ).toBe(2);
    expect(nearestValidPoint(3, 4, [[3, 4]])).toBe(0);
    expect(nearestValidPoint(3, 4, [[2, 3]])).toBe(-1);
  });
});
