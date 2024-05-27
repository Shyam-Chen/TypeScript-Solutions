import type { TreeNode } from '~/utils/binary-tree';

type HasPathSum = (root: TreeNode | null, targetSum: number) => boolean;

/**
 * Accepted
 */
export const hasPathSum: HasPathSum = (root, targetSum) => {
  if (!root) return false;

  targetSum -= root.val;

  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
