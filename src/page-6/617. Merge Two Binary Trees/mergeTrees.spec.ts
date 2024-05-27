import { generateBinaryTree } from '~/utils/binary-tree';

import { mergeTrees } from './mergeTrees';

describe('617. Merge Two Binary Trees', () => {
  it('mergeTrees - Case 1', () => {
    //     1
    //    / \
    //   3   2
    //  /
    // 5
    const root1 = generateBinaryTree([1, 3, 2, 5]);

    //     2
    //    / \
    //   1   3
    //    \   \
    //     4   7
    const root2 = generateBinaryTree([2, 1, 3, null, 4, null, 7]);

    //     3
    //    / \
    //   4   5
    //  / \   \
    // 5   4   7
    const merged = generateBinaryTree([3, 4, 5, 5, 4, null, 7]);

    expect(mergeTrees(root1, root2)).toEqual(merged);
  });

  it('mergeTrees - Case 2', () => {
    //   1
    const root1 = generateBinaryTree([1]);

    //   1
    //  /
    // 2
    const root2 = generateBinaryTree([1, 2]);

    //   2
    //  /
    // 2
    const merged = generateBinaryTree([2, 2]);

    expect(mergeTrees(root1, root2)).toEqual(merged);
  });
});
