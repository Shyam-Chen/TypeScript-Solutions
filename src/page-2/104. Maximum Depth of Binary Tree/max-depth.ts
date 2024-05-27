import type { TreeNode } from '~/utils/binary-tree';

type MaxDepth = (root: TreeNode | null) => number;

/**
 * Accepted
 */
export const maxDepth: MaxDepth = (root) => {
  if (!root) return 0;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
