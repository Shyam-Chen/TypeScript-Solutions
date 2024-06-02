import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { deleteDuplicates } from './deleteDuplicates';

describe('83. Remove Duplicates from Sorted List', () => {
  it('deleteDuplicates - Case 1', () => {
    const head = generateLinkedList([1, 1, 2]);
    const expected = generateLinkedList([1, 2]);
    expect(stringify(deleteDuplicates(head))).toBe(stringify(expected));
  });

  it('deleteDuplicates - Case 2', () => {
    const head = generateLinkedList([1, 1, 2, 3, 3]);
    const expected = generateLinkedList([1, 2, 3]);
    expect(stringify(deleteDuplicates(head))).toBe(stringify(expected));
  });
});
