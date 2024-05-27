import type { TreeNode } from '~/utils/binary-tree';

type IsSameTree = (p: TreeNode | null, q: TreeNode | null) => boolean;

/**
 * Accepted
 */
export const isSameTree: IsSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
