import {
  searchRange, searchRange2,
} from './find-first-and-last-position-of-element-in-sorted-array';

describe('34. Find First and Last Position of Element in Sorted Array', () => {
  it('searchRange', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });

  it('searchRange2', () => {
    expect(searchRange2([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRange2([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
});
