import {
  searchRangeS1, searchRangeS2,
} from './find-first-and-last-position-of-element-in-sorted-array';

describe('searchRange', () => {
  it('searchRangeS1', () => {
    expect(searchRangeS1([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRangeS1([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });

  it('searchRangeS2', () => {
    expect(searchRangeS2([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRangeS2([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
});
