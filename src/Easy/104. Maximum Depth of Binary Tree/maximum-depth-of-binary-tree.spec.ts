import { maxDepth } from './maximum-depth-of-binary-tree';

describe('104. Maximum Depth of Binary Tree', () => {
  it('maxDepth', () => {
    //     3
    //    / \
    //   9  20
    //     /  \
    //    15   7
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

    expect(maxDepth(binaryTree)).toEqual(3);
  });
});
