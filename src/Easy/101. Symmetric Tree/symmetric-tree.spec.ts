import { generateBinaryTree } from '~/utils/binary-tree';

import { isSymmetric } from './symmetric-tree';

describe('101. Symmetric Tree', () => {
  it('isSymmetric', () => {
    //     1
    //    / \
    //   2   2
    //  / \ / \
    // 3  4 4  3
    const binaryTree1 = generateBinaryTree([1, 2, 2, 3, 4, 4, 3]);

    expect(isSymmetric(binaryTree1)).toEqual(true);

    //   1
    //  / \
    // 2   2
    //  \   \
    //  3    3
    const binaryTree2 = generateBinaryTree([1, 2, 2, null, 3, null, 3]);

    expect(isSymmetric(binaryTree2)).toEqual(false);
  });
});
