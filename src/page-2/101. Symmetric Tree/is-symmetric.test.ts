import { generateBinaryTree } from '~/utils/binary-tree';

import { isSymmetric } from './is-symmetric';

describe('101. Symmetric Tree', () => {
  test('isSymmetric', () => {
    //     1
    //    / \
    //   2   2
    //  / \ / \
    // 3  4 4  3
    const binaryTree1 = generateBinaryTree([1, 2, 2, 3, 4, 4, 3]);

    expect(isSymmetric(binaryTree1)).toBe(true);

    //   1
    //  / \
    // 2   2
    //  \   \
    //  3    3
    const binaryTree2 = generateBinaryTree([1, 2, 2, null, 3, null, 3]);

    expect(isSymmetric(binaryTree2)).toBe(false);
  });
});
