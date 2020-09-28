import { generateBinaryTree } from '~/utils/binary-tree';

import { levelOrderBottom } from './binary-tree-level-order-traversal-2';

describe('107. Binary Tree Level Order Traversal II', () => {
  it('levelOrderBottom', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = generateBinaryTree([3, 9, 20, null, null, 15, 7]);

    // [
    //   [15,7],
    //   [9,20],
    //   [3]
    // ]
    expect(levelOrderBottom(binaryTree)).toEqual([[15, 7], [9, 20], [3]]);
  });
});
