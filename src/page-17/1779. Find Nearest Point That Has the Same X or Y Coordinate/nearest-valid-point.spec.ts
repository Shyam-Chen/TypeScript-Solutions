import { nearestValidPoint } from './nearest-valid-point';

describe('1779. Find Nearest Point That Has the Same X or Y Coordinate', () => {
  it('nearestValidPoint', () => {
    expect(
      nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
      ]),
    ).toEqual(2);
    expect(nearestValidPoint(3, 4, [[3, 4]])).toEqual(0);
    expect(nearestValidPoint(3, 4, [[2, 3]])).toEqual(-1);
  });
});
