import { stringify } from 'flatted';

import { mergeTwoLists } from './merge-two-lists';

describe('21. Merge Two Sorted Lists', () => {
  it('mergeTwoLists', () => {
    // 1->2->4
    const l1 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    // 1->3->4
    const l2 = {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    const result = mergeTwoLists(l1, l2);

    // 1->1->2->3->4->4
    const spec = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null,
              },
            },
          },
        },
      },
    };

    expect(stringify(result)).toEqual(stringify(spec));
  });
});
