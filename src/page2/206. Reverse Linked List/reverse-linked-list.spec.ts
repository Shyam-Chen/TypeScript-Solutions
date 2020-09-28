import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { reverseList } from './reverse-linked-list';

describe('206. Reverse Linked List', () => {
  it('reverseList', () => {
    // 1->2->3->4->5
    const linkedList = generateLinkedList([1, 2, 3, 4, 5]);

    const result = reverseList(linkedList);

    // 5->4->3->2->1
    const spec = generateLinkedList([5, 4, 3, 2, 1]);

    expect(stringify(result)).toEqual(stringify(spec));
  });
});
