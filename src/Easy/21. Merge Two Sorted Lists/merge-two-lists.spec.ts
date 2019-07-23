import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { mergeTwoLists } from './merge-two-lists';

describe('21. Merge Two Sorted Lists', () => {
  it('mergeTwoLists', () => {
    // 1->2->4
    const l1 = generateLinkedList([1, 2, 4]);

    // 1->3->4
    const l2 = generateLinkedList([1, 3, 4]);

    const result = mergeTwoLists(l1, l2);

    // 1->1->2->3->4->4
    const spec = generateLinkedList([1, 1, 2, 3, 4, 4]);

    expect(stringify(result)).toEqual(stringify(spec));
  });
});
