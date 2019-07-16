export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const maxDepth = (root: TreeNode): number => {
  if (!root) return 0;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
