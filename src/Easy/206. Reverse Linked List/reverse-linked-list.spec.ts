import { stringify } from 'flatted';

import { reverseList } from './reverse-linked-list';

describe('206. Reverse Linked List', () => {
  it('reverseList', () => {
    // 1->2->3->4->5
    const linkedList = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    };

    const result = reverseList(linkedList);

    // 5->4->3->2->1
    const spec = {
      val: 5,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 1,
              next: null,
            },
          },
        },
      },
    };

    expect(stringify(result)).toEqual(stringify(spec));
  });
});
