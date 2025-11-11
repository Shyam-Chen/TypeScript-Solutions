import { generateBinaryTree } from '~/utils/binary-tree';

import { hasPathSum } from './hasPathSum';

describe('112. Path Sum', () => {
  test('hasPathSum', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \      \
    // 7    2      1
    const binaryTree = generateBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

    expect(hasPathSum(binaryTree, 22)).toBe(true);

    //   1
    //  / \
    // 2   3
    const binaryTree2 = generateBinaryTree([1, 2, 3]);

    expect(hasPathSum(binaryTree2, 5)).toBe(false);

    expect(hasPathSum(generateBinaryTree([]), 0)).toBe(false);
  });
});
