import { stringify } from 'flatted';

import { deleteDuplicates } from './delete-duplicates';

describe('83. Remove Duplicates from Sorted List', () => {
  it('deleteDuplicates', () => {
    // 1->1->2
    const head1 = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
    };

    const result1 = deleteDuplicates(head1);

    // 1->2
    const spec1 = {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    };

    expect(stringify(result1)).toEqual(stringify(spec1));

    // 1->1->2->3->3
    const head2 = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 3,
              next: null,
            },
          },
        },
      },
    };

    const result2 = deleteDuplicates(head2);

    // 1->2->3
    const spec2 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    expect(stringify(result2)).toEqual(stringify(spec2));
  });
});
