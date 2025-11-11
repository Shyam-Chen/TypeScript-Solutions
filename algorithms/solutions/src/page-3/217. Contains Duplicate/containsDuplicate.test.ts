import { containsDuplicate, containsDuplicate2, containsDuplicate3 } from './containsDuplicate';

describe('217. Contains Duplicate', () => {
  test('containsDuplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test('containsDuplicate2', () => {
    expect(containsDuplicate2([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate2([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test('containsDuplicate3', () => {
    expect(containsDuplicate3([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate3([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
