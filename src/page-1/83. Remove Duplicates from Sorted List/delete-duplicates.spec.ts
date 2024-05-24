import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { deleteDuplicates } from './delete-duplicates';

describe('83. Remove Duplicates from Sorted List', () => {
  it('deleteDuplicates', () => {
    // 1->1->2
    const head1 = generateLinkedList([1, 1, 2]);

    const result1 = deleteDuplicates(head1);

    // 1->2
    const spec1 = generateLinkedList([1, 2]);

    expect(stringify(result1)).toEqual(stringify(spec1));

    // 1->1->2->3->3
    const head2 = generateLinkedList([1, 1, 2, 3, 3]);

    const result2 = deleteDuplicates(head2);

    // 1->2->3
    const spec2 = generateLinkedList([1, 2, 3]);

    expect(stringify(result2)).toEqual(stringify(spec2));
  });
});
