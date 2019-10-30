import { checkStraightLine } from './check-straight-line';

describe('1232. Check If It Is a Straight Line', () => {
  it('checkStraightLine', () => {
    expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toEqual(true);
    expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toEqual(false);
  });
});
