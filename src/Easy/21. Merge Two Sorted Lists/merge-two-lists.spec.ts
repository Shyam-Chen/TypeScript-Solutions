import { mergeTwoLists } from './merge-two-lists';

describe('21. Merge Two Sorted Lists', () => {
  it('mergeTwoLists', () => {
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

    expect(mergeTwoLists(l1, l2)).toEqual(
      {
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
      },
    );
  });
});
