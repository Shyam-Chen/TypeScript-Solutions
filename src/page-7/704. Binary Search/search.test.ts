import { search, search2 } from './search';

describe('704. Binary Search', () => {
  test('search', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('search2', () => {
    expect(search2([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(search2([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
