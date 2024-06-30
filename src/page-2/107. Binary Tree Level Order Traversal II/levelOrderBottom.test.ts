import { generateBinaryTree } from '~/utils/binary-tree';

import { levelOrderBottom } from './levelOrderBottom';

describe('107. Binary Tree Level Order Traversal II', () => {
  test('levelOrderBottom', () => {
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
    expect(levelOrderBottom(binaryTree)).toStrictEqual([[15, 7], [9, 20], [3]]);

    expect(levelOrderBottom(generateBinaryTree([1]))).toStrictEqual([[1]]);

    expect(levelOrderBottom(generateBinaryTree([]))).toStrictEqual([]);
  });
});
