import { searchRange, searchRange2 } from './searchRange';

describe('34. Find First and Last Position of Element in Sorted Array', () => {
  it('searchRange', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
    expect(searchRange([], 0)).toStrictEqual([-1, -1]);
  });

  it('searchRange2', () => {
    expect(searchRange2([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
    expect(searchRange2([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
    expect(searchRange2([], 0)).toStrictEqual([-1, -1]);
  });
});
