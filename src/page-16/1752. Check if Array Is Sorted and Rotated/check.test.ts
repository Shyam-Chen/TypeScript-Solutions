import { check } from './check';

describe('1752. Check if Array Is Sorted and Rotated', () => {
  test('check', () => {
    expect(check([3, 4, 5, 1, 2])).toBe(true);
    expect(check([2, 1, 3, 4])).toBe(false);
    expect(check([1, 2, 3])).toBe(true);
  });
});
