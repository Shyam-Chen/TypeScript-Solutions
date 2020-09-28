import { containsDuplicate } from './contains-duplicate';

describe('217. Contains Duplicate', () => {
  it('containsDuplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
