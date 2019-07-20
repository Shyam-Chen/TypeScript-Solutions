import { hasPathSum } from './path-sum';

describe('112. Path Sum', () => {
  it('hasPathSum', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \      \
    // 7    2      1
    const binaryTree = {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 2,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        val: 8,
        left: {
          val: 13,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(hasPathSum(binaryTree, 22)).toEqual(true);
  });
});
