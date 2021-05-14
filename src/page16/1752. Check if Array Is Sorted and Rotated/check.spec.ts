import { check } from './check';

describe('1752. Check if Array Is Sorted and Rotated', () => {
  it('check', () => {
    expect(check([3, 4, 5, 1, 2])).toEqual(true);
    expect(check([2, 1, 3, 4])).toEqual(false);
    expect(check([1, 2, 3])).toEqual(true);
    expect(check([1, 1, 1])).toEqual(true);
    expect(check([2, 1])).toEqual(true);
  });
});
