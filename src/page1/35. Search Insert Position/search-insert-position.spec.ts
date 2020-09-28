import { searchInsert, searchInsert2 } from './search-insert-position';

describe('35. Search Insert Position', () => {
  it('searchInsert', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });

  it('searchInsert2', () => {
    expect(searchInsert2([1, 3, 5, 6], 5)).toEqual(2);
    expect(searchInsert2([1, 3, 5, 6], 2)).toEqual(1);
    expect(searchInsert2([1, 3, 5, 6], 7)).toEqual(4);
    expect(searchInsert2([1, 3, 5, 6], 0)).toEqual(0);
  });
});
