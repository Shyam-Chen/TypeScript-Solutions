import { containsDuplicate, containsDuplicate2 } from './contains-duplicate';

describe('217. Contains Duplicate', () => {
  it('containsDuplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });

  it('containsDuplicate2', () => {
    expect(containsDuplicate2([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate2([1, 2, 3, 4])).toEqual(false);
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
