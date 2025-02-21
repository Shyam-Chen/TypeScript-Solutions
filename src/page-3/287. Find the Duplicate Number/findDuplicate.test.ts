import { findDuplicate } from './findDuplicate';

describe('287. Find the Duplicate Number', () => {
  test('findDuplicate', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
    expect(findDuplicate([3, 3, 3, 3, 3])).toBe(3);
  });
});
