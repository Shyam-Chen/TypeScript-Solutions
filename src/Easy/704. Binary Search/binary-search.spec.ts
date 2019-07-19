import { search, search2 } from './binary-search';

describe('704. Binary Search', () => {
  it('search', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });

  it('search2', () => {
    expect(search2([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
    expect(search2([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
});
