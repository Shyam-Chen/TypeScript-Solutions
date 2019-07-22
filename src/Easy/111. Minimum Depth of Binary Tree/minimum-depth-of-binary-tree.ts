import { TreeNode } from '~/utils/binary-tree';

export const minDepth = (root: TreeNode): number => {
  if (!root) return 0;

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }

  return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
};
