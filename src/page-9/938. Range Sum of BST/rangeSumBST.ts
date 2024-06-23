import type { TreeNode } from '~/utils/binary-tree';

type RangeSumBST = (root: TreeNode | null, low: number, high: number) => number;

export const rangeSumBST: RangeSumBST = (root, low, high) => {
  if (!root) return 0;
  if (root.val < low) return rangeSumBST(root.right, low, high);
  if (root.val > high) return rangeSumBST(root.left, low, high);
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
