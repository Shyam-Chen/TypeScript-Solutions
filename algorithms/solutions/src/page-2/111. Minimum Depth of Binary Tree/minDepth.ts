import type { TreeNode } from '~/utils/binary-tree';

type MinDepth = (root: TreeNode | null) => number;

/**
 * Accepted
 */
export const minDepth: MinDepth = (root) => {
  if (!root) return 0;

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }

  return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
};
