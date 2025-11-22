import type { TreeNode } from '~/utils/binary-tree';

type HasPathSum = (root: TreeNode | null, targetSum: number) => boolean;

/**
 * Accepted
 */
export const hasPathSum: HasPathSum = (root, targetSum) => {
  if (!root) return false;

  const newTargetSum = targetSum - root.val;

  if (!root.left && !root.right) {
    return newTargetSum === 0;
  }

  return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
};
