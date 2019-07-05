import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('removeDuplicates', () => {
  it('removeDuplicates', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});
