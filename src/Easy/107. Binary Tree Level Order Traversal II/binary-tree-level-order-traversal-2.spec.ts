import { levelOrderBottom } from './binary-tree-level-order-traversal-2';

describe('107. Binary Tree Level Order Traversal II', () => {
  it('levelOrderBottom', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    expect(levelOrderBottom(binaryTree)).toEqual(
      [
        [15, 7],
        [9, 20],
        [3],
      ],
    );
  });
});
