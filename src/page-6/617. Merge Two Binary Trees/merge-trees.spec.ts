import { generateBinaryTree } from '~/utils/binary-tree';

import { mergeTrees } from './merge-trees';

describe('617. Merge Two Binary Trees', () => {
  it('mergeTrees', () => {
    //     1
    //    / \
    //   3   2
    //  /
    // 5
    const t1 = generateBinaryTree([1, 3, 2, 5]);

    //   2
    //  / \
    // 1   3
    //  \   \
    //   4   7
    const t2 = generateBinaryTree([2, 1, 3, null, 4, null, 7]);

    //     3
    //    / \
    //   4   5
    //  / \   \
    // 5   4   7
    const merged = generateBinaryTree([3, 4, 5, 5, 4, null, 7]);

    expect(mergeTrees(t1, t2)).toEqual(merged);
  });
});
