import { isSymmetric } from './symmetric-tree';

describe('101. Symmetric Tree', () => {
  it('isSymmetric', () => {
    //     1
    //    / \
    //   2   2
    //  / \ / \
    // 3  4 4  3
    const binaryTree1 = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
    };

    expect(isSymmetric(binaryTree1)).toEqual(true);

    //   1
    //  / \
    // 2   2
    //  \   \
    //  3    3
    const binaryTree2 = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: null,
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
    };

    expect(isSymmetric(binaryTree2)).toEqual(false);
  });
});
